export function normalizeGermanText(text: string) {
  return text
    .replace(/Ae/g, "Ä")
    .replace(/Oe/g, "Ö")
    .replace(/Ue/g, "Ü")
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/ue/g, "ü")
}

export function normalizeGermanData<T>(value: T): T {
  if (typeof value === "string") {
    return normalizeGermanText(value) as T
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeGermanData(item)) as T
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).map(([key, item]) => [
      key,
      normalizeGermanData(item),
    ])
    return Object.fromEntries(entries) as T
  }

  return value
}
