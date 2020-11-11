/**
 * Calculate an update step between a target and current value using spring physics
 * https://blog.maximeheckel.com/posts/the-physics-behind-spring-animations
 * @param {number} target     Target value being moved towards
 * @param {number} current    Current value, as stored from last step
 * @param {number} velocity   Current velocity, as stored from last step
 * @param {number} damping    Normalized damping factor (determines how "springy" movement is, with lower numbers taking longer to arrive at equilibrium)
 * @param {number} tension    Normalized tension factor (determines how "stiff" the spring is, with lower numbers moving more slowly)
 * @returns {object}          The updated `current` and `velocity` values, these should be stored for calculation on next step
 */
export const springStep = (
  target,
  current,
  velocity,
  damping = 0.3,
  tension = 0.1
) => {
  const PRECISION = 0.0001;
  const vel = (velocity + (target - current) * tension) * (1 - damping);
  const result =
    Math.round((current + vel) * (1 / PRECISION)) / (1 / PRECISION);
  return { current: result, velocity: vel };
};
