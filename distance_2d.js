/*
    Calculate distance between two 2D points
    ---

    p1_x        Number      X coordinate of first point
    p1_y        Number      Y coordinate of first point

    p2_x        Number      X coordinate of second point
    p2_y        Number      Y coordinate of second point

    ---
    Returns     Number      Distance between points

*/

export default function (

    p1_x, p1_y, p2_x, p2_y

) {

    const dx = p2_x - p1_x;
    const dy = p2_y - p1_y;

    return Math.sqrt( dx * dx + dy * dy );
}
