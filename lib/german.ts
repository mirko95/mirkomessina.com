export function normalizeGermanText(text: string) {
  return text
    // Repair common UTF-8 mojibake sequences that already exist in some copy.
    .replace(/\u00C3\u201E/g, "\u00C4")
    .replace(/\u00C3\u2013/g, "\u00D6")
    .replace(/\u00C3\u0152/g, "\u00DC")
    .replace(/\u00C3\u00A4/g, "\u00E4")
    .replace(/\u00C3\u00B6/g, "\u00F6")
    .replace(/\u00C3\u00BC/g, "\u00FC")
    .replace(/\u00C3\u009F/g, "\u00DF")
    // Then normalize ASCII digraphs used throughout the German copy.
    .replace(/Ae/g, "\u00C4")
    .replace(/Oe/g, "\u00D6")
    .replace(/Ue/g, "\u00DC")
    .replace(/ae/g, "\u00E4")
    .replace(/oe/g, "\u00F6")
    // Preserve loanwords like "Clinique"; only normalize German-style "ue".
    .replace(/(?<![qQ])ue/g, "\u00FC")
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
