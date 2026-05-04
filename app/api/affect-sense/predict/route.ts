import { NextResponse } from "next/server"

const DEFAULT_BACKEND_URL = "http://127.0.0.1:8000"

function getBackendUrl() {
  const rawUrl = process.env.AFFECT_SENSE_BACKEND_URL ?? DEFAULT_BACKEND_URL

  try {
    return new URL("/predict", rawUrl.endsWith("/") ? rawUrl : `${rawUrl}/`)
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  const backendUrl = getBackendUrl()

  if (!backendUrl) {
    return NextResponse.json(
      { error: "AFFECT_SENSE_BACKEND_URL is not a valid URL." },
      { status: 500 },
    )
  }

  try {
    const payload = await request.text()
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      cache: "no-store",
    })

    const body = await response.text()
    const contentType = response.headers.get("content-type") ?? "application/json"

    return new Response(body, {
      status: response.status,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    console.error("AffectSense backend request failed", error)
    return NextResponse.json(
      { error: "AffectSense backend is unreachable." },
      { status: 503 },
    )
  }
}
