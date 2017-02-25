/*
    Simple mathematical 2D point rotation in cartesian coordinate space
    ---
    Source: http://stackoverflow.com/a/17411276/6512315

    cX            Number         X origin coordinate to rotate around
    cY            Number         Y origin coordinate to rotate around
    x             Number         X coordinate to be rotated
    y             Number         Y coordinate to be rotated
    a             Number         Angle to rotate by, positive for clockwise, negative for A.C.

    inDegrees     Boolean        Optional - Flag whether angle is passed in as degrees

    --
    Returns       Object         New x and y coordinates

*/

export default function (

    cX, cY, x, y, a,

    inDegrees = false;

) {

    // Convert to radians if flagged as degrees
    if ( inDegrees ) { a *= Math.PI / 180 };

    let nX = ( Math.cos( a ) * ( x - cX ) ) + ( Math.sin( a ) * ( y - cY ) ) + cX;
    let nY = ( Math.cos( a ) * ( y - cY ) ) - ( Math.sin( a ) * ( x - cX ) ) + cY;

    return { x: nX, y: nY };
}
