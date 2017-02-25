/*
    Calculate the dimensions and position of a source rectangle to 'cover' the destination rectangle

    sW          Number      width of the source rectangle
    sH          Number      height of the source rectangle
    dW          Number      width of the destination (parent) rectangle
    dH          Number      height of the destination (parent) rectangle

    --
    Returns     Object      Object containing width, height, left and top values

*/

export default function (

    sW, sH, dW, dH

) {

    var sRatio = sW / sH;
    var dRatio = dW / dH;

    var width, height;
    var w, h, l, t;

    // Fit to width
    if ( sRatio < dRatio ) {

        width = dW;
        height = dW / sRatio;

        w = width;
        h = height;
        l = 0;
        t = ( height - dH ) * -0.5;
    }
    // Fit to height
    else {

        width = dH * sRatio;
        height = dH;

        w = width;
        h = height;
        l = ( width - dW ) * -0.5;
        t = 0;
    }

    return { width: w, height: h, left: l, top: t };
}