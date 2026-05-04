from __future__ import annotations

import base64
import os
from pathlib import Path
from typing import Any

import cv2 as cv
import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


ROOT = Path(__file__).resolve().parents[1]
FACE_MODEL = ROOT / "backend" / "models" / "face_detection_yunet_2023mar.onnx"
EMOTION_MODEL = ROOT / "backend" / "models" / "fer2013_model.onnx"
LABELS = ["Anger", "Disgust", "Fear", "Happy", "Neutral", "Sad", "Surprise"]


class FrameRequest(BaseModel):
    image: str


class FaceAlignment:
    def __init__(self) -> None:
        self.std_points = np.array(
            [
                [38.2946, 51.6963],
                [73.5318, 51.5014],
                [56.0252, 71.7366],
                [41.5493, 92.3655],
                [70.7299, 92.2041],
            ],
            dtype=np.float32,
        )

    def align(self, image: np.ndarray, landmarks: np.ndarray) -> np.ndarray:
        transform, _ = cv.estimateAffinePartial2D(landmarks.astype(np.float32), self.std_points)
        if transform is None:
            raise ValueError("Could not estimate face alignment transform.")
        return cv.warpAffine(image, transform, (112, 112))


class EmotionPipeline:
    def __init__(self) -> None:
        if not FACE_MODEL.exists():
            raise FileNotFoundError(f"Missing YuNet model: {FACE_MODEL}")
        if not EMOTION_MODEL.exists():
            raise FileNotFoundError(f"Missing emotion model: {EMOTION_MODEL}")

        self.face_detector = cv.FaceDetectorYN.create(
            str(FACE_MODEL),
            "",
            (320, 320),
            score_threshold=0.7,
            nms_threshold=0.3,
            top_k=5000,
        )
        self.emotion_model = cv.dnn.readNet(str(EMOTION_MODEL))
        self.alignment = FaceAlignment()

    def predict(self, image: np.ndarray) -> dict[str, Any]:
        height, width = image.shape[:2]
        self.face_detector.setInputSize((width, height))
        _, faces = self.face_detector.detect(image)

        if faces is None or len(faces) == 0:
            raise HTTPException(status_code=422, detail="No face detected.")

        face = max(faces, key=lambda item: item[2] * item[3])
        x, y, w, h = face[:4]
        landmarks = face[4:14].reshape(5, 2)
        aligned = self.alignment.align(image, landmarks)
        rgb = cv.cvtColor(aligned, cv.COLOR_BGR2RGB).astype(np.float32) / 255.0
        rgb = (rgb - 0.5) / 0.5
        blob = cv.dnn.blobFromImage(rgb)

        self.emotion_model.setInput(blob, "data")
        output = self.emotion_model.forward(["label"])[0][0]
        scores = self._softmax(output)
        dominant_index = int(np.argmax(scores))

        return {
            "dominantEmotion": LABELS[dominant_index],
            "confidence": float(scores[dominant_index]),
            "scores": {label: float(scores[index]) for index, label in enumerate(LABELS)},
            "faceRect": {
                "x": float(x),
                "y": float(y),
                "width": float(w),
                "height": float(h),
            },
        }

    @staticmethod
    def _softmax(values: np.ndarray) -> np.ndarray:
        exps = np.exp(values - np.max(values))
        return exps / np.sum(exps)


def decode_data_url(data_url: str) -> np.ndarray:
    encoded = data_url.split(",", 1)[1] if "," in data_url else data_url
    raw = base64.b64decode(encoded)
    array = np.frombuffer(raw, dtype=np.uint8)
    image = cv.imdecode(array, cv.IMREAD_COLOR)
    if image is None:
        raise HTTPException(status_code=400, detail="Invalid image payload.")
    return image


app = FastAPI(title="AffectSense OpenCV Emotion API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        origin.strip()
        for origin in os.getenv(
            "AFFECT_SENSE_ALLOWED_ORIGINS",
            "http://localhost:3000,http://localhost:3001,http://127.0.0.1:3000",
        ).split(",")
        if origin.strip()
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
pipeline = EmotionPipeline()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/predict")
def predict(payload: FrameRequest) -> dict[str, Any]:
    image = decode_data_url(payload.image)
    return pipeline.predict(image)
