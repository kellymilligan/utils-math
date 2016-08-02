define( function () {

    'use strict';

    /*
        Get the X and Y position of a point on a circle at supplied angle
        ---
        http://stackoverflow.com/a/839931/6512315

        cX            num         X origin coordinate at centre of circle
        cY            num         Y origin coordinate at centre of circle
        cR            num         Radius of the circle from it's origin
        a             rad/deg     Angle to rotate by, positive for clockwise, negative for A.C.

        inDegrees     bool        optional - Flag whether angle is passed in as degrees

    */

    return function (cX, cY, cR, a, inDegrees) {

        // Convert to radians if flagged as degrees
        if ( inDegrees === true ) { a = ( Math.PI / 180 ) * a; }

        var x = cX + cR * Math.cos( a );
        var y = cY + cR * Math.sin( a );

        return { x: x, y: y };
    };

});