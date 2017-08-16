/*
    Get the X and Y position of a point on a circle at supplied angle
    Defaults to a unit circle (radius = 1) with a center origin (0, 0)
    ---
    http://stackoverflow.com/a/839931/6512315

    theta       Number      Angle around circle to calculate the point at
    x           Number      X position at circle centre
    y           Number      Y position at circle centre
    radius      Number      Radius of the circle

    deg         Boolean     Optional - Flag whether angle is in degrees

    ---
    Returns     Object      Calculated point's coordinate pair

*/

export default function (

    theta,
    x = 0,
    y = 0,
    radius = 1,

    deg = false

) {

    // Convert to radians if flagged as degrees
    theta = deg ? theta * ( Math.PI / 180 ) : theta;

    return {
        x: x + radius * Math.cos( theta ),
        y: y + radius * Math.sin( theta )
    };
}