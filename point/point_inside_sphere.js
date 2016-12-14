/*
    Check whether a given point is within a uniform sphere of the given radius
    Assumes that the origin of the sphere is at [0, 0, 0].
    ---

    pX       Num     X coordinate of the point
    pY       Num     Y coordinate of the point
    pZ       Num     Z coordinate of the point
    r        Num     Radius of the sphere

*/

import distance3d from '../distance_3d';

export default function (

    pX = 0,
    pY = 0,
    pZ = 0,
    r = 1

) {

    if ( distance3d( 0, 0, 0, pX, pY, pZ ) <= r ) { return true; }
    return false;
}