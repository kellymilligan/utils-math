define( function () {

    'use strict';

    /*
        Return a new 2D point object. Optionally supply default origin coordinates
        ---

        oX           num      optional - Initial origin X coordinate
        oY           num      optional - Initial origin Y coordinate

        --
        Returns      obj      object with point origin and current X and Y coordinates

    */

    return function (oX, oY) {

        oX = oX || 0;
        oY = oY || 0;

        return {

            // Origin coordinates
            oX: oX,
            oY: oY,

            // Current coordinates
            x: 0,
            y: 0
        };
    };

});