/*
    Calculate the scaling factor of a rotated rectangle
    https://math.stackexchange.com/a/438573
    ---
    width     Number      Width of rotated rect
    height    Number      Height of rotated rect
    theta     Number      Angle of rotation in radians
    ---
    Returns   Number      'k', the scaling factor of the outer bounding rect
*/

export default function scalingFactorOfRotatedRect(width, height, theta) {
  return (
    Math.cos(Math.abs(theta)) + (width / height) * Math.sin(Math.abs(theta))
  );
}
