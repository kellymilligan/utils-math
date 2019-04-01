/*
    Check whether a given point is within a uniform sphere of the given radius.
    By default assumes a unit sphere with it's origin at [0, 0, 0].
    ---
    pX        Number      X coordinate of the point
    pY        Number      Y coordinate of the point
    pZ        Number      Z coordinate of the point
    r         Number      Radius of the sphere
    oX        Number      X coordinate of the sphere's origin
    oY        Number      Y coordinate of the sphere's origin
    oZ        Number      Z coordinate of the sphere's origin
    ---
    return    Boolean     Flag whether point is within sphere

*/

import distance3d from './distance3d'

export default function (

  pX,
  pY,
  pZ,
  r = 1,
  oX = 0,
  oY = 0,
  oZ = 0

) {

  return distance3d( oX, oY, oZ, pX, pY, pZ ) <= r
}
