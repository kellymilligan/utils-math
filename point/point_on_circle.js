/*
    Get the X and Y position of a point on a circle at supplied angle
    ---
    http://stackoverflow.com/a/839931/6512315

    cX            Number        X origin coordinate at centre of circle
    cY            Number        Y origin coordinate at centre of circle
    cR            Number        Radius of the circle from it's origin
    a             Number        Angle to rotate by, positive for clockwise, negative for A.C.

    inDegrees     Boolean       Optional - Flag whether angle is passed in as degrees

    ---
    Returns       Object        Object containing point's X and Y coordinates

*/

export default function (

    cX, cY, cR, a,

    inDegrees = false

) {

    // Convert to radians if flagged as degrees
    if ( inDegrees ) { a *= Math.PI / 180; }

    var x = cX + cR * Math.cos( a );
    var y = cY + cR * Math.sin( a );

    return { x: x, y: y };
}