export function normalizeItalianText(text: string) {
  return text
    .replace(/Ã¨/g, "è")
    .replace(/Ã©/g, "é")
    .replace(/Ã¬/g, "ì")
    .replace(/Ã²/g, "ò")
    .replace(/Ã¹/g, "ù")
    .replace(/Ã /g, "à")
    .replace(/SÃ¬/g, "Sì")
    .replace(/sÃ¬/g, "sì")
    .replace(/\bPiu`/g, "Più")
    .replace(/\bpiu`/g, "più")
    .replace(/\bPerche`/g, "Perché")
    .replace(/\bperche`/g, "perché")
    .replace(/\bCio`/g, "Ciò")
    .replace(/\bcio`/g, "ciò")
    .replace(/\bQualita`/g, "Qualità")
    .replace(/\bqualita`/g, "qualità")
    .replace(/\bAttivita`/g, "Attività")
    .replace(/\battivita`/g, "attività")
    .replace(/\bOspitalita`/g, "Ospitalità")
    .replace(/\bospitalita`/g, "ospitalità")
    .replace(/\b([Ee])`/g, (_, letter: string) => (letter === "E" ? "È" : "è"))
    .replace(/\b([Aa])`/g, (_, letter: string) => (letter === "A" ? "À" : "à"))
    .replace(/\b([Ii])`/g, (_, letter: string) => (letter === "I" ? "Ì" : "ì"))
    .replace(/\b([Oo])`/g, (_, letter: string) => (letter === "O" ? "Ò" : "ò"))
    .replace(/\b([Uu])`/g, (_, letter: string) => (letter === "U" ? "Ù" : "ù"))
}

export function normalizeItalianData<T>(value: T): T {
  if (typeof value === "string") {
    return normalizeItalianText(value) as T
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeItalianData(item)) as T
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).map(([key, item]) => [
      key,
      normalizeItalianData(item),
    ])
    return Object.fromEntries(entries) as T
  }

  return value
}
