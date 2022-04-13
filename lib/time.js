
export function FormatDate(t) {
    const d = new Date(t)
    return d.toLocaleDateString("en-US")
}