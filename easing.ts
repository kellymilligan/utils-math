/*
    Penner's easing equations adapted to accept a single normalised alpha value
    ---
    a          Number      'alpha' value (from 0-1)
    ---
    Returns    Number      Normalised value with easing applied
*/

// Sine
// ----

export const easeInSine = (a: number) => {
  return -1 * Math.cos(a * (Math.PI / 2)) + 1
}

export const easeOutSine = (a: number) => {
  return 1 * Math.sin(a * (Math.PI / 2))
}

export const easeInOutSine = (a: number) => {
  return -0.5 * (Math.cos((Math.PI * a) / 1) - 1)
}

// Quad
// ----

export const easeInQuad = (a: number) => {
  return a * a
}

export const easeOutQuad = (a: number) => {
  return -1 * a * (a - 2)
}

export const easeInOutQuad = (a: number) => {
  a /= 0.5
  if (a < 1) return 0.5 * a * a
  a--
  return -0.5 * (a * (a - 2) - 1)
}

// Cubic
// -----

export const easeInCubic = (a: number) => {
  return a * a * a
}

export const easeOutCubic = (a: number) => {
  a--
  return a * a * a + 1
}

export const easeInOutCubic = (a: number) => {
  a /= 0.5
  if (a < 1) return 0.5 * a * a * a
  a -= 2
  return 0.5 * (a * a * a + 2)
}

// Quart
// -----

export const easeInQuart = (a: number) => {
  return a * a * a * a
}

export const easeOutQuart = (a: number) => {
  a--
  return -1 * (a * a * a * a - 1)
}

export const easeInOutQuart = (a: number) => {
  a /= 0.5
  if (a < 1) return 0.5 * a * a * a * a
  a -= 2
  return -0.5 * (a * a * a * a - 2)
}

// Quint
// -----

export const easeInQuint = (a: number) => {
  return a * a * a * a * a
}

export const easeOutQuint = (a: number) => {
  a--
  return a * a * a * a * a + 1
}

export const easeInOutQuint = (a: number) => {
  a /= 0.5
  if (a < 1) return 0.5 * a * a * a * a * a
  a -= 2
  return 0.5 * (a * a * a * a * a + 2)
}

// Expo
// ----

export const easeInExpo = (a: number) => {
  return Math.pow(2, 10 * (a - 1))
}

export const easeOutExpo = (a: number) => {
  return -Math.pow(2, -10 * a) + 1
}

export const easeInOutExpo = (a: number) => {
  a /= 0.5
  if (a < 1) return 0.5 * Math.pow(2, 10 * (a - 1))
  a--
  return 0.5 * (-Math.pow(2, -10 * a) + 2)
}
