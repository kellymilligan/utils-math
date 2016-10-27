define( function () {

    'use strict';

    /*
        Return a random unit signed value ( -1 or +1 )
    */

    return function () {

        return ( Math.random() > 0.5 ) ? 1 : -1;
    };

});
