
export function FormatImageURL(u) {
    if (!u || u == '') return ''
    if (u[0] == '/') return process.env.NEXT_PUBLIC_MEDIA_URL + u
    return u
}