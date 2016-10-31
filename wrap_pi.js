define( function () {

    'use strict';

    /*
        Wrap a positive angle value to be within it's canonical -180 to +180 degree range
        ---

        t             rad/deg       Angle (theta) to wrap

        inDegrees     bool          optional - Flag whether angle is passed in as degrees

        --
        Returns       rad           wrapped theta angle in radians

    */

    return function (t, inDegrees) {

        var TWO_PI = Math.PI * 2;

        // Convert to radians if flagged as degrees
        if ( inDegrees === true ) { t = t * ( Math.PI / 180 ); }

        // Range check
        if ( Math.abs( t ) >= Math.PI ) {

            var revolutions = parseInt( ( t + Math.PI ) * ( 1 / TWO_PI ), 10 );

            t -= revolutions * TWO_PI;
        }

        return t;
    };

});
