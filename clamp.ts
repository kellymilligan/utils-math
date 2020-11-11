/**
 * Clamp a numerical value to be within the provided range
 *
 * @param val  Value to clamp
 * @param min  Minimum value
 * @param max  Maximum value
 */
export function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}
