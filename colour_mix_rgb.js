/*
    Mix two RGB colour vectors together
    ---

    source      Object      RGB colour vector (100% at alpha = 0)
    dest        Object      RGB colour vector (100% at alpha = 1)
    alpha       Number      normalized mix proportion (0-1)

    --
    Returns     Object      Mixed RGB colour vector

*/

export default function (

    source, dest, alpha = 0.5

) {

    let r = Math.floor( dest.r * alpha + source.r * ( 1 - alpha ) );
    let g = Math.floor( dest.g * alpha + source.g * ( 1 - alpha ) );
    let b = Math.floor( dest.b * alpha + source.b * ( 1 - alpha ) );

    return { r: r, g: g, b: b };
}