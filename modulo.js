/*
    Tweaked modulo function to handle negative numbers correctly
    ---

    n          Number      Number to perform operation on
    m          Number      Number to modulo by

    ---
    Returns    Number      Modulus value

*/

export default function (

    n, m

) {

    return ( n % m + m ) % m;
}
