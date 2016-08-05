define( function () {

    'use strict';

    /*
        Return a new 3D point object
        ---

        Returns      obj      object with point origin and current X, Y, and Z coordinates

    */

    return function () {

        return {

            // Origin coordinates
            oX: 0,
            oY: 0,
            oZ: 0,

            // Current coordinates
            x: 0,
            y: 0,
            z: 0
        };
    };

});