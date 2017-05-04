/*
    Change the phiLength and thetaLength on a THREE.SphereGeometry
    ---
    Source: http://stackoverflow.com/a/26412631

    geometry        THREE.Geometry      Geometry to adjust
    phiLength       Number              New phiLength in radians
    thetaLength     Number              New thetaLength in radians

*/

export default function(

    geometry,

    phiLength = Math.PI * 2,
    thetaLength = Math.PI

) {

    // Use defaults for missing values.
    // Defaults as specified: https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js
    let radius = geometry.parameters.radius || 50;
    let widthSegments = geometry.parameters.widthSegments || 8;
    let heightSegments = geometry.parameters.heightSegments || 6;
    let phiStart = geometry.parameters.phiStart || 0;
    let thetaStart = geometry.parameters.thetaStart || 0;

    for ( let y = 0; y <= heightSegments; y ++ ) {
        for ( let x = 0; x <= widthSegments; x ++ ) {

            let u = x / widthSegments;
            let v = y / heightSegments;

            let vertex = geometry.vertices[ ( y * ( widthSegments + 1 ) ) + x ];

            vertex.x = -radius * Math.cos( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );
            vertex.y = radius * Math.cos( thetaStart + v * thetaLength );
            vertex.z = radius * Math.sin( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );
        }
    }

    geometry.verticesNeedUpdate = true;
}