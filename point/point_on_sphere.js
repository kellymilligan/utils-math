/*
    Calculate 3D point coordinates on a sphere
    ---

    theta         num       Polar angle in radians
    phi           num       Azimuthal angle in radians
    radius        num       Radius of the sphere

    --
    Returns       obj       Vector coordinates of the point

*/

export default function (

    theta, phi, radius

) {

    let x = radius * Math.sin( theta ) * Math.cos( phi );
    let y = radius * Math.sin( phi );
    let z = radius * Math.cos( theta ) * Math.cos( phi );

    return { x: x, y: y, z: z };
}