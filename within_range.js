/*
    Return whether the value is within the range
    ---

    val       Number       Value to check
    min       Number       Minimum value
    max       Number       Maximum value

    ---
    Returns   Boolean      Flag whether value is within range or not

*/

export default function (

    val, min, max

) {

    return ( val >= min && val <= max );
}