/*

    Check whether a given point is within a polygon formed of points
    ---
    https://github.com/substack/point-in-polygon

    point       Array       Array with coordinates of the point as [ x, y ]
    polygon     Array       Array of point arrays that form the polygon

    ---
    Returns     Boolean     Flag whether point is inside polygon

*/

export default function (

    point,
    polygon

) {

    var x = point[ 0 ];
    var y = point[ 1 ];

    var inside = false;

    for ( var i = 0, j = polygon.length - 1; i < polygon.length; j = i++ ) {

        var xi = polygon[ i ][ 0 ], yi = polygon[ i ][ 1 ];
        var xj = polygon[ j ][ 0 ], yj = polygon[ j ][ 1 ];

        var intersect = ( ( yi > y ) != ( yj > y ) ) &&
                        ( x < ( xj - xi ) * ( y - yi ) / ( yj - yi ) + xi );

        if ( intersect ) inside = !inside;
    }

    return inside;
}