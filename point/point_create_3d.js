/*
    Return a new 2D point object. Optionally supply default origin coordinates
    ---

    oX           Number      Optional - Initial origin X coordinate
    oY           Number      Optional - Initial origin Y coordinate
    oZ           Number      Optional - Initial origin Z coordinate

    --
    Returns      Object      Object with point origin and current X, Y and Z coordinates

*/

export default function (

    oX = 0,
    oY = 0,
    oZ = 0

) {

    return {

        // Origin coordinates
        oX: oX,
        oY: oY,
        oZ: oZ,

        // Current coordinates
        x: 0,
        y: 0
        z: 0
    };
}