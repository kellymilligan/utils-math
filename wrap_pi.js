/*
    Wrap a positive angle value to be within it's canonical -180 to +180 degree range
    ---

    t             Number       Angle (theta) to wrap

    inDegrees     Boolean      Optional - Flag whether angle is passed in as degrees

    --
    Returns       Number       Wrapped theta angle in same unit as input

*/

const TWO_PI = Math.PI * 2;

export default function (

    t,

    inDegrees = false

) {

    // Convert to radians if flagged as degrees
    if ( inDegrees === true ) { t = t * ( Math.PI / 180 ); }

    // Range check
    if ( Math.abs( t ) >= Math.PI ) {

        var revolutions = parseInt( ( t + Math.PI ) * ( 1 / TWO_PI ), 10 );

        t -= revolutions * TWO_PI;
    }

    // Convert back to degrees if necessary
    if ( inDegrees === true ) { t *= 180 / Math.PI; }

    return t;
}
