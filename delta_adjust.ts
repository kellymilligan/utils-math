import { clamp } from './clamp';

/**
 * Adjust a numerical value by time delta (e.g. to account for framerate above or below 60fps)
 *
 * @param val         Value to adjust
 * @param delta       Frame delta time value (time between previous frame and current frame) in milliseconds
 * @param clampLower  Lower bound to clamp to, assumes zero by default to ensure non-negative adjustments
 * @param clampUpper  Upper bound to clamp to, assumes 1 by default
 */
export function deltaAdjust(
  val: number,
  delta: number,
  clampLower = 0,
  clampUpper = 1,
) {
  return clamp(val * (delta / (1000 / 60)), clampLower, clampUpper);
}