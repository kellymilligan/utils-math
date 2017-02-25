/*
    Check whether a given point is within a uniform sphere of the given radius.
    By default assumes a unit sphere with it's origin at [0, 0, 0].
    ---

    pX        Number      X coordinate of the point
    pY        Number      Y coordinate of the point
    pZ        Number      Z coordinate of the point

    r         Number      Optional - Radius of the sphere
    oX        Number      Optional - X coordinate of the sphere's origin
    oY        Number      Optional - Y coordinate of the sphere's origin
    oZ        Number      Optional - Z coordinate of the sphere's origin

    ---
    Returns   Boolean     Flag whether point is within sphere

*/

import distance3d from './distance_3d';

export default function (

    // Point coordinates
    pX = 0,
    pY = 0,
    pZ = 0,

    // Sphere radius
    r = 1,

    // Origin coordinates
    oX = 0,
    oY = 0,
    oZ = 0

) {

    if ( distance3d( oX, oY, oZ, pX, pY, pZ ) <= r ) { return true; }
    return false;
}