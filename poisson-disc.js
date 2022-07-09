/*
  Based on Mike Bostock's implementation: https://bl.ocks.org/mbostock/19168c663618b7f07158
*/

import { polar2d } from './math'
import { range, value } from './random'

const { PI, ceil, min, max } = Math

export const poissonDisc = (width, height, radius = 10, k = 30) => {
  const cell = radius * Math.SQRT1_2,
    cols = ceil(width / cell),
    rows = ceil(height / cell),
    grid = new Array(cols * rows),
    queue = []

  const boundary = (x, y) => x > 0 && x < width && y > 0 && y < height

  const locate = (x, y) => [~~(x / cell), ~~(y / cell)]

  const attempt = (x, y) => {
    const location = locate(x, y),
      i0 = max(location[0] - 2, 0),
      j0 = max(location[1] - 2, 0),
      i1 = min(location[0] + 3, cols),
      j1 = min(location[1] + 3, rows)

    for (let j = j0; j < j1; ++j) {
      const col = j * cols
      for (let i = i0; i < i1; ++i) {
        const cell = grid[col + i]
        if (cell) {
          const dx = cell[0] - x,
            dy = cell[1] - y
          if (dx * dx + dy * dy < radius * radius) return false
        }
      }
    }
    return true
  }

  const place = (x, y) => {
    const sample = [x, y],
      location = locate(x, y)
    queue.push(sample)
    grid[cols * location[1] + location[0]] = sample
    return sample
  }

  return () => {
    // Return random sample on first request
    if (!queue.length) return place(value() * width, value() * height)

    // Pick a random item from the queue to sample against
    do {
      const index = ~~(value() * queue.length),
        origin = queue[index]

      // Fetch new placement candidate
      for (let j = 0; j < k; ++j) {
        const [x, y] = polar2d(
          range(radius, 2 * radius),
          2 * PI * value(),
          origin
        )

        // Accept if within bounds and valid
        if (boundary(x, y) && attempt(x, y)) return place(x, y)
      }

      // Remove from the queue
      queue.splice(index, 1)
    } while (queue.length)
  }
}
