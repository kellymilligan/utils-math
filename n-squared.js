import { dist2d } from './math'
import { range } from './random'

export const nSquaredSampler = (width, height, radius = 10, k = 30) => {
  const placed = []
  let attemptNumber = 0

  const attempt = (x, y) => {
    attemptNumber++
    for (let i = 0, l = placed.length; i < l; i++) {
      if (dist2d(x, y, placed[i][0], placed[i][1]) < radius) return false
    }
    return true
  }

  const place = (x, y) => {
    placed.push([x, y])
    attemptNumber = 0
    return [x, y]
  }

  return () => {
    while (attemptNumber < k) {
      const x = range(0, width),
        y = range(0, height)

      if (attempt(x, y)) return place(x, y)
    }
  }
}
