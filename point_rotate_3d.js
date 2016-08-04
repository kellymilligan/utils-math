define( function () {

    'use strict';

    /*
        Simple mathmatical 3D rotation in a right-handed coordinate space.
        Does NOT assume translation, the point is rotated around the space's origin at [0, 0]
        ---
        Source: http://stackoverflow.com/a/34060479/6512315

        x             obj           Object containing x, y and z coordinates of the point
        aX            rad/deg       Angle of rotation on X axis
        aY            rad/deg       Angle of rotation on y axis
        aZ            rad/deg       Angle of rotation on Z axis

        inDegrees     bool          optional - Flag whether angle is passed in as degrees

        --
        Returns       obj           object containing x, y, and z coordinates after rotation
    */

    return function (point, aX, aY, aZ, inDegrees) {

        // Catch undefined values
        aX = aX || 0;
        aY = aY || 0;
        aZ = aZ || 0;

        // Convert to radians if flagged as degrees
        if ( inDegrees === true ) {

            var degToRad = Math.PI / 180;
            aX = aX * degToRad;
            aY = aY * degToRad;
            aZ = aZ * degToRad;
        }

        var sinA = Math.sin(aZ);
        var cosA = Math.cos(aZ);

        var sinB = Math.sin(aY);
        var cosB = Math.cos(aY);

        var sinC = Math.sin(aX);
        var cosC = Math.cos(aX);

        // Multiply rotation matrices
        var aXx = cosA * cosB;
        var aXy = cosA * sinB * sinC - sinA * cosC;
        var aXz = cosA * sinB * cosC + sinA * sinC;

        var aYx = sinA * cosB;
        var aYy = sinA * sinB * sinC + cosA * cosC;
        var aYz = sinA * sinB * cosC - cosA * sinC;

        var aZx = -sinB;
        var aZy = cosB * sinC;
        var aZz = cosB * cosC;

        // Multiply resulting rotation matrix by the point vector
        var rX = aXx * point.x + aXy * point.y + aXz * point.z;
        var rY = aYx * point.x + aYy * point.y + aYz * point.z;
        var rZ = aZx * point.x + aZy * point.y + aZz * point.z;

        return { x: rX, y: rY, z: rZ };
    };

});