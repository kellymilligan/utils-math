/*
    Calculate distance between two 3D points
    ---

    p1_x        Number      X coordinate of first point
    p1_y        Number      Y coordinate of first point
    p1_z        Number      Z coordinate of first point

    p2_x        Number      X coordinate of second point
    p2_y        Number      Y coordinate of second point
    p2_z        Number      Z coordinate of second point

    ---
    Returns     Number      Distance between the points

*/

export default function (

    p1_x, p1_y, p1_z, p2_x, p2_y, p2_z

) {

    const dx = p2_x - p1_x;
    const dy = p2_y - p1_y;
    const dz = p2_z - p1_z;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
}
