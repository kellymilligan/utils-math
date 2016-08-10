define( function () {

    'use strict';

    /*
        Return a new 3D point object. Optionally supply default origin coordinates
        ---

        oX           num      optional - Initial origin X coordinate
        oY           num      optional - Initial origin Y coordinate
        oZ           num      optional - Initial origin Z coordinate

        --
        Returns      obj      object with point origin and current X, Y, and Z coordinates

    */

    return function (oX, oY, oZ) {

        oX = oX || 0;
        oY = oY || 0;
        oZ = oZ || 0;

        return {

            // Origin coordinates
            oX: oX,
            oY: oY,
            oZ: oZ,

            // Current coordinates
            x: 0,
            y: 0,
            z: 0
        };
    };

});