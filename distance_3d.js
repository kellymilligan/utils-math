/*
    Calculate distance between two 3D points
    ---

    pX1       Num       X coordinate of first point
    pY1       Num       Y coordinate of first point
    pZ1       Num       Z coordinate of first point

    pX2       Num       X coordinate of second point
    pY2       Num       Y coordinate of second point
    pZ2       Num       Z coordinate of second point

*/

export default function (pX1, pY1, pZ1, pX2, pY2, pZ2) {

    const dx = pX2 - pX1;
    const dy = pY2 - pY1;
    const dz = pZ2 - pZ1;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
}
