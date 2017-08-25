/*
    Lerp (Linear Interpolate) between two 2-dimensional points
    ---

    a          Object      First point object containing x and y coordinates
    b          Object      Second point object containing x and y coordinates

    alpha      Number      Normalised progress value (from 0-1)

    ---
    Returns    Object      point object of x, y, and z coordinates at alpha position

*/

export default function (

    a, b,

    alpha = 0.5 // default to half way between points

) {

    var x = a.x + alpha * ( b.x - a.x );
    var y = a.y + alpha * ( b.y - a.y );

    return { x: x, y: y };
}

