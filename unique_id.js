/*
    Generate unique ID's
*/

// Simpler ID
// Source: https://stackoverflow.com/a/44078785
function id() {

    return Math.random().toString( 36 ).substring( 2 ) + ( new Date() ).getTime().toString( 36 );
}

// Stronger 128bit UUID
// https://stackoverflow.com/a/44996682
function uuid() {

    const s4 = () => Math.floor( ( 1 + Math.random() ) * 0x10000 ).toString( 16 ).substring( 1 );
    return `${ s4() + s4() }-${ s4() }-${ s4() }-${ s4() }-${ s4() + s4() + s4() }`;
}

export {
    id,
    uuid
}

export default uuid;