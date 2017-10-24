/*
    Convert a hexidecimal colour value to RGB vector format.
    Supports shorthand colour hex (e.g. #f00)
    ---
    Source: https://stackoverflow.com/a/5624139

    hex         String      Hexideciaml colour value to convert
    normalize   Bool        Convert RGB values from 0-255 to 0-1 per channel

    ---
    Returns     Object      RGB color vector object

*/

export default function hexToRgb( hex, normalize = false ) {

    // Expand shorthand form
    hex = hex.replace( /^#?([a-f\d])([a-f\d])([a-f\d])$/i, function( m, r, g, b ) {
        return r + r + g + g + b + b;
    } );

    // Calculate values
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
    const r = parseInt( result[ 1 ], 16 );
    const g = parseInt( result[ 2 ], 16 );
    const b = parseInt( result[ 3 ], 16 );

    return {
        r: normalize ? r / 255 : r,
        g: normalize ? g / 255 : g,
        b: normalize ? b / 255 : b
    };
}