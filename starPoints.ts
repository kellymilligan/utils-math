import pointOnCircle from "./pointOnCircle";

/**
 * Calculate the points of a star based on number of points and magnitude of spikes
 *
 * @param n number of points
 * @param mag magnitude of spikes
 * @param theta offset angle, assumes "north" by default
 * @returns array of star points
 */
export const starPoints = (n = 5, mag = 0.5, theta = 0): Array<number> => {
  const count = n * 2;
  const points = [];
  for (let i = 0; i < count; i++) {
    const isOdd = (i + 1) % 2;
    points.push(
      ...pointOnCirlce(theta + Math.PI * -0.5 + (i / count) * Math.PI * 2).map(
        (p) => (!isOdd ? p * (1 - mag) : p)
      )
    );
  }
  return points;
};
