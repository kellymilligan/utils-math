/*
    Generate unique ID's
*/

// Simple 128bit UUID
// https://stackoverflow.com/a/44996682
function simple() {
    const s4 = () => Math.floor( ( 1 + Math.random() ) * 0x10000 ).toString( 16 ).substring( 1 );
    return `${ s4() + s4() }-${ s4() }-${ s4() }-${ s4() }-${ s4() + s4() + s4() }`;
}

// UUID as used in Three.js 
// https://github.com/mrdoob/three.js/blob/dev/src/math/Math.js
function uuid() {

    let lut = []

    for ( let i = 0; i < 256; i++ ) {
        lut[ i ] = ( i < 16 ? '0' : '' ) + ( i ).toString( 16 );
    }

    return ( 
        function generateUUID() {
            const d0 = Math.random() * 0xffffffff | 0
            const d1 = Math.random() * 0xffffffff | 0
            const d2 = Math.random() * 0xffffffff | 0
            const d3 = Math.random() * 0xffffffff | 0
            const uuid = 
                lut[ d0 & 0xff ] + lut[ d0 >> 8 & 0xff ] + lut[ d0 >> 16 & 0xff ] + lut[ d0 >> 24 & 0xff ] + '-' +
                lut[ d1 & 0xff ] + lut[ d1 >> 8 & 0xff ] + '-' + lut[ d1 >> 16 & 0x0f | 0x40 ] + lut[ d1 >> 24 & 0xff ] + '-' +
                lut[ d2 & 0x3f | 0x80 ] + lut[ d2 >> 8 & 0xff ] + '-' + lut[ d2 >> 16 & 0xff ] + lut[ d2 >> 24 & 0xff ] +
                lut[ d3 & 0xff ] + lut[ d3 >> 8 & 0xff ] + lut[ d3 >> 16 & 0xff ] + lut[ d3 >> 24 & 0xff ]

            return uuid.toUpperCase()
        }
    )()
}

export {
    simple,
    uuid
}

export default uuid