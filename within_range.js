define( function () {

    'use strict';

    /*
        Return whether the value is within the range
        ---

        val       Num       Value to check
        min       Num       Minimum value
        max       Num       Maximum value

    */

    return function (val, min, max) {

        return ( val >= min && val <= max );
    };
});