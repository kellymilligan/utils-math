/*
    Return the number with the highest magnitude, regardless of sign
    ---
    TODO: Add ability to pass in multiple numbers, like with Math.max()

    valA      Number      First value to compare
    valB      Number      Second value to compare

    ---
    Returns   Number      The highest number

*/

export default function (

    valA, valB

) {

    return Math.abs( valA ) >= Math.abs( valB ) ? valA : valB;
};