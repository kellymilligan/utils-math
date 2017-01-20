/*
    Tweaked modulo function to handle negative numbers correctly
    ---

    n       Num       Number to perform operation on
    m       Num       Number to modulo by

*/

export default function (n, m) {

    return ( n % m + m ) % m;
}
