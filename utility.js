export function randI(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
  )
}

export function randF(min, max) {
  return Math.random() * (max - min) + min
}
