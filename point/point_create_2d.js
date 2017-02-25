/*
    Return a new 2D point object. Optionally supply default origin coordinates
    ---

    oX           Number      Optional - Initial origin X coordinate
    oY           Number      Optional - Initial origin Y coordinate

    --
    Returns      Object      Object with point origin and current X and Y coordinates

*/

export default function (

    oX = 0,
    oY = 0

) {

    return {

        // Origin coordinates
        oX: oX,
        oY: oY,

        // Current coordinates
        x: 0,
        y: 0
    };
}