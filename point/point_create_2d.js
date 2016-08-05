define( function () {

    'use strict';

    /*
        Return a new 2D point object
        ---

        Returns      obj      object with point origin and current X and Y coordinates

    */

    return function () {

        return {

            // Origin coordinates
            oX: 0,
            oY: 0,

            // Current coordinates
            x: 0,
            y: 0
        };
    };

});