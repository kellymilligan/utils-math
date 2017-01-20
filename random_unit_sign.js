/*
    Return a random unit signed value ( -1 or +1 )

*/

export default function () {

    return ( Math.random() > 0.5 ) ? 1 : -1;
}