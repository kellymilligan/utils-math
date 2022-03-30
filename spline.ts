/*
  Adapted from https://github.com/gdenisov/cardinal-spline-js
  Epistemex (c) 2013-2014
  License: MIT
*/

type SplineConfig = {
  tension?: number;
  detail?: number;
  close?: boolean;
};

/**
 * Calculate points forming a cardinal spline through the given anchor points
 *
 * @param points Array of points in series [x1, y1, x2, y2, ...]
 * @param config.tension Tension, typically between [0.0, 1.0]
 * @param config.detail Number of segments between two points
 * @param config.close Close the ends making the line continuous
 * @returns Calculated array of points along the spline
 */
export const spline = (
  points: number[],
  { tension = 0.5, detail = 25, close = false }: SplineConfig = {},
) => {
  const count = points.length;
  const result = new Float32Array(
    (count - 2) * detail + 2 + (close ? 2 * detail : 0),
  );
  let resultPos = 0;
  const cache = new Float32Array((detail + 2) * 4);
  let cachePos = 4;

  let pts = [...points];

  if (close) {
    pts.unshift(points[count - 1]); // insert end point as first point
    pts.unshift(points[count - 2]);
    pts.push(points[0], points[1]); // first point as last point
  } else {
    pts.unshift(points[1]); // copy 1. point and insert at beginning
    pts.unshift(points[0]);
    pts.push(points[count - 2], points[count - 1]); // duplicate end-points
  }

  // Cache inner-loop calculations as they are based on t alone
  cache[0] = 1; // 1,0,0,0

  for (let i = 1; i < detail; i++) {
    const st = i / detail,
      st2 = st * st,
      st3 = st2 * st,
      st23 = st3 * 2,
      st32 = st2 * 3;

    cache[cachePos++] = st23 - st32 + 1; // c1
    cache[cachePos++] = st32 - st23; // c2
    cache[cachePos++] = st3 - 2 * st2 + st; // c3
    cache[cachePos++] = st3 - st2; // c4
  }

  cache[++cachePos] = 1; // 0,1,0,0

  const parse = (pts: number[], cache: Float32Array, count: number) => {
    for (let i = 2; i < count; i += 2) {
      const pt1 = pts[i],
        pt2 = pts[i + 1],
        pt3 = pts[i + 2],
        pt4 = pts[i + 3],
        t1x = (pt3 - pts[i - 2]) * tension,
        t1y = (pt4 - pts[i - 1]) * tension,
        t2x = (pts[i + 4] - pt1) * tension,
        t2y = (pts[i + 5] - pt2) * tension;

      for (let t = 0; t < detail; t++) {
        const c = t << 2,
          c1 = cache[c],
          c2 = cache[c + 1],
          c3 = cache[c + 2],
          c4 = cache[c + 3];

        result[resultPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
        result[resultPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
      }
    }
  };

  // Calculate points
  parse(pts, cache, count);

  if (close) {
    pts = [];
    pts.push(
      points[count - 4],
      points[count - 3],
      points[count - 2],
      points[count - 1],
    ); // second last and last
    pts.push(points[0], points[1], points[2], points[3]); // first and second
    parse(pts, cache, 4);
  }

  // Add last point
  const last = close ? 0 : points.length - 2;
  result[resultPos++] = points[last];
  result[resultPos] = points[last + 1];

  return result;
};

export default spline;
