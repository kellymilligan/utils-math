/*
    Get a random point within a sphere.
    By default assumes a unit sphere with it's origin at [0, 0, 0].
    ---

    r          Num     Radius of the sphere,

    oX         Num     Optional - X coordinate of the sphere's origin
    oY         Num     Optional - Y coordinate of the sphere's origin
    oZ         Num     Optional - Z coordinate of the sphere's origin

    --
    Returns    Arr     An array with the point's [x, y, z] coordinates

*/

import pointInsideSphere from './point_inside_sphere';

export default function (

    // Sphere radius
    r = 1,

    // Origin coordinates
    oX = 0,
    oY = 0,
    oZ = 0

) {

    let x, y, z;

    do {

        x = oX + ( Math.random() * 2 - 1 ) * r;
        y = oY + ( Math.random() * 2 - 1 ) * r;
        z = oZ + ( Math.random() * 2 - 1 ) * r;
    }
    while ( !pointInsideSphere( x, y, z, r, oX, oY, oZ ) );

    return [ x, y, z ];
}