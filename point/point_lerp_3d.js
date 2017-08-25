/*
    Lerp (Linear Interpolate) between two 3-dimensional points
    ---

    a          Object      First point object containing x, y, and z coordinates
    b          Object      Second point object containing x, y, and z coordinates

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
    var z = a.z + alpha * ( b.z - a.z );

    return { x: x, y: y, z: z };
}
