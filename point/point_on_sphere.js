/*
    Calculate 3D point coordinates on a sphere's surface
    ---

    theta         Number       Polar angle in radians
    phi           Number       Azimuthal angle in radians
    radius        Number       Radius of the sphere

    --
    Returns       Object       3D vector coordinates of the point

*/

export default function (

    theta, phi, radius

) {

    let x = radius * Math.sin( theta ) * Math.cos( phi );
    let y = radius * Math.sin( phi );
    let z = radius * Math.cos( theta ) * Math.cos( phi );

    return { x: x, y: y, z: z };
}