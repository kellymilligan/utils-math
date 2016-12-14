/*
    Check whether a given point is within a uniform sphere of the given radius.
    By default assumes a unit sphere with it's origin at [0, 0, 0].
    ---

    pX       Num     X coordinate of the point
    pY       Num     Y coordinate of the point
    pZ       Num     Z coordinate of the point

    r        Num     Optional - Radius of the sphere
    oX       Num     Optional - X coordinate of the sphere's origin
    oY       Num     Optional - Y coordinate of the sphere's origin
    oZ       Num     Optional - Z coordinate of the sphere's origin

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