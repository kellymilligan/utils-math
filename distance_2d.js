/*
    Calculate distance between two 2D points
    ---

    pX1        Number       X coordinate of first point
    pY1        Number       Y coordinate of first point

    pX2        Number       X coordinate of second point
    pY2        Number       Y coordinate of second point

    ---
    Returns    Number       Distance between points

*/

export default function (

    pX1, pY1, pX2, pY2

) {

    const dx = pX2 - pX1;
    const dy = pY2 - pY1;

    return Math.sqrt( dx * dx + dy * dy );
}
