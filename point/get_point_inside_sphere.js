/*
    Get a random point within a sphere of the given radius.
    Assumes that the origin of the sphere is at [0, 0, 0].
    ---

    r           Num      Radius of the sphere

    --
    Returns     Arr      An array with the point's [x, y, z] coordinates

*/

import pointInsideSphere from './point_inside_sphere';

export default function (

    r = 1

) {

    let x, y, z;

    do {

        x = ( Math.random() * 2 - 1 ) * r;
        y = ( Math.random() * 2 - 1 ) * r;
        z = ( Math.random() * 2 - 1 ) * r;
    }
    while ( !pointInsideSphere( x, y, z, r ) );

    return [ x, y, z ];
}