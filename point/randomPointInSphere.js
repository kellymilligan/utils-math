/*
    Return a 3D vector within a sphere of the supplied radius
    Defaults to a unit sphere with a radius of 1
    ---
    r         Number      Radius of the sphere
    ---
    return    Boolean     Flag whether point is within sphere

*/

import distance3d from './distance3d'

export default function ( r = 1 ) {

  // Start outside of sphere
  let point = { x: r + 1, y: r + 1, z: r + 1 }

  // Iterate until a point within the sphere is found
  while ( distance3d( 0, 0, 0, point.x, point.y, point.z ) > r ) {
    point.x = ( Math.random() * r ) * 2 - 1
    point.y = ( Math.random() * r ) * 2 - 1
    point.z = ( Math.random() * r ) * 2 - 1
  }

  return point
}
