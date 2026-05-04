# AffectSense Backend

FastAPI/OpenCV backend for the AffectSense portfolio demo.

## Local

Install dependencies:

```bash
python -m pip install -r backend/requirements.txt
```

Run the API:

```bash
npm run api:opencv
```

Health check:

```text
http://127.0.0.1:8000/health
```

## Deploy

Deploy this repo as a separate Docker web service using `backend/Dockerfile`.

After deployment, set the frontend environment variable in Vercel:

```text
AFFECT_SENSE_BACKEND_URL=https://your-backend-url
```

Use the backend base URL only, without `/predict`.
