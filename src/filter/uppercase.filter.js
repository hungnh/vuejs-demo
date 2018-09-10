export function uppercase (value) {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.toUpperCase()
}
