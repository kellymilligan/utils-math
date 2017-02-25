/*
    Lerp (Linear Interpolate) between two 2-dimensional points
    ---

    a          Object      First point object containing x and y coordinates
    b          Object      Second point object containing x and y coordinates

    p          Number      Normalised progress value (from 0-1)

    ---
    Returns    Object      point object of x, y, and z coordinates at position (p)

*/

export default function (

    a, b,

    p = 0.5 // default to half way between points

) {

    var x = a.x + p * ( b.x - a.x );
    var y = a.y + p * ( b.y - a.y );

    return { x: x, y: y };
}

