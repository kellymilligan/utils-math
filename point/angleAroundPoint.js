/*
  Calculate the angle between two 2d vector points
  Defaults to assume a point at origin [0,0]
  https://stackoverflow.com/a/21484228
  ---
  targetX           Number      X position of target point
  targetY           Number      Y position of target point
  originX           Number      X position of origin
  originY           Number      Y position at origin
  offset            Number      Angle offset in Radians (i.e. Math.PI * -0.5 aligns zero to "up")
  convertRadians    Boolean     Flag whether to return angle in degrees
  ---
  return            Number      Theta angle between points
*/

export default function (

  targetX,
  targetY,
  originX = 0,
  originY = 0,
  offset = 0,
  convertRadians = false

) {

  const theta = -offset + Math.atan2( targetY, targetX ) - Math.atan2( originY, originX )
  const clamped = theta < 0 ? theta + Math.PI * 2 : theta

  return convertRadians ? clamped * ( 180 / Math.PI ) : clamped
}
