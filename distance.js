define( function () {

    'use strict';

    /*
        Calculate distance between two points
        ---

        pX1       Num       X coordinate of first point
        pY1       Num       Y coordinate of first point

        pX2       Num       X coordinate of second point
        pY2       Num       Y coordinate of second point

    */

    return function (pX1, pY1, pX2, pY2) {

        var dx = pX2 - pX1;
        var dy = pY2 - pY1;

        return Math.sqrt( dx * dx + dy * dy );
    };

});
