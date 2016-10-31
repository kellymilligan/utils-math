define( function () {

    'use strict';

    /*
        Return the number with the highest magnitude, regardless of sign
        ---
        TODO: Add ability to pass in multiple numbers, like with Math.max()

        valA      Num      First value to compare
        valB      Num      Second value to compare

    */

    return function (valA, valB) {

        return Math.abs( valA ) >= Math.abs( valB ) ? valA : valB;
    };

});
