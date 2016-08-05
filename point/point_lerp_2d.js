define( function () {

    'use strict';

    /*
        Lerp (Linear Interpolate) between two 2-dimensional points
        ---

        a           obj        First point object containing x and y coordinates
        b           obj        Second point object containing x and y coordinates

        p           num        Normalised progress value (from 0-1)

        ---
        Returns     obj        point object of x and y coordinates at position (p)

    */

    return function (a, b, p) {

        p = p !== undefined ? p : 0.5; // default to 50% if no progress supplied

        // Lerp algorithm: a + p * ( b - a );

        var x = a.x + p * ( b.x - a.x );
        var y = a.y + p * ( b.y - a.y );

        return { x: x, y: y };
    };

});
