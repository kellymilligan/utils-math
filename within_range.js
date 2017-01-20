/*
    Return whether the value is within the range
    ---

    val       Num       Value to check
    min       Num       Minimum value
    max       Num       Maximum value

*/

export default function (val, min, max) {

    return ( val >= min && val <= max );
}