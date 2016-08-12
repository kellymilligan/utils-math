define( function () {

    'use strict';

    /*

        Mix two RGB colours together using averaging

        r1            num          Red value of first colour (0-255)
        g1            num          Green value of first colour (0-255)
        b1            num          Blue value of first colour (0-255)

        r2            num          Red value of second colour (0-255)
        g2            num          Green value of second colour (0-255)
        b2            num          Blue value of second colour (0-255)

        --
        Returns       arr          Array containing new 0-255 R, G and B colour values

    */

    return function (r1, g1, b1, r2, g2, b2) {

        var r = ( r1 + r2 ) / 2;
        var g = ( g1 + g2 ) / 2;
        var b = ( b1 + b2 ) / 2;

        return [ r, g, b ];
    };

});