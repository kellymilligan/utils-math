// Based on Mike Bostock's implementation: https://bl.ocks.org/mbostock/19168c663618b7f07158

import { range, value } from './random'

const { PI, ceil, min, max, cos, sin } = Math

export const poissonDisc = (width, height, radius = 10, k = 30) => {
  const cellSize = radius * Math.SQRT1_2,
    gridWidth = ceil(width / cellSize),
    gridHeight = ceil(height / cellSize),
    grid = new Array(gridWidth * gridHeight),
    queue = []

  let queueSize = 0,
    sampleSize = 0

  const boundary = (x, y) => x > 0 && x < width && y > 0 && y < height

  const locate = (x, y) => [~~(x / cellSize), ~~(y / cellSize)]

  const attempt = (x, y) => {
    const location = locate(x, y),
      i0 = max(location[0] - 2, 0),
      j0 = max(location[1] - 2, 0),
      i1 = min(location[0] + 3, gridWidth),
      j1 = min(location[1] + 3, gridHeight)

    for (let j = j0; j < j1; ++j) {
      const col = j * gridWidth
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
    const s = [x, y],
      location = locate(x, y)
    queue.push(s)
    grid[gridWidth * location[1] + location[0]] = s
    sampleSize++
    queueSize++
    return s
  }

  return () => {
    // Return random sample on first request
    if (!sampleSize) return place(value() * width, value() * height)

    // Pick a random item from the queue to sample against
    while (queueSize) {
      const i = ~~(value() * queueSize),
        s = queue[i]

      // Fetch new placement candidate
      for (let j = 0; j < k; ++j) {
        const theta = 2 * PI * value(),
          r = range(radius, 2 * radius),
          x = s[0] + r * cos(theta),
          y = s[1] + r * sin(theta)

        // Accept if within bounds and valid
        if (boundary(x, y) && attempt(x, y)) return place(x, y)
      }

      queue[i] = queue[--queueSize]
      queue.length = queueSize
    }
  }
}
