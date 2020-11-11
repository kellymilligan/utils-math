/**
 * Generate a random number skewed by a beta distribution probability density function
 * at alpha = beta = 0.5, to weight distribution towards the sides of the range.
 * https://en.wikipedia.org/wiki/Beta_distribution
 * https://stackoverflow.com/a/16120286
 */
export function betaRandom() {
  return Math.sin(Math.random() * (Math.PI / 2)) ** 2;
}
export function betaRandomLeft() {
  const beta = betaRandom();
  return beta < 0.5 ? 2 * beta : 2 * (1 - beta);
}
export function betaRandomRight() {
  const beta = betaRandom();
  return beta > 0.5 ? 2 * beta - 1 : 2 * (1 - beta) - 1;
}