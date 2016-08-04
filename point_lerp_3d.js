define( function () {

    'use strict';

    /*
        Lerp (Linear Interpolate) between two 3-dimensional points
        ---

        a           obj        First point object containing x, y, and z coordinates
        b           obj        Second point object containing x, y, and z coordinates

        p           num        Normalised progress value (from 0-1)

        ---
        Returns     obj        point object of x, y, and z coordinates at position (p)

    */

    return function (a, b, p) {

        p = p !== undefined ? p : 0.5; // default to 50% if no progress supplied

        // Lerp algorithm: a + p * ( b - a );

        var x = a.x + p * ( b.x - a.x );
        var y = a.y + p * ( b.y - a.y );
        var z = a.z + p * ( b.z - a.z );

        return { x: x, y: y, z: z };
    };

});
