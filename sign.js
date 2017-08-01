/*
    Return the unit sign of the supplied value
    ---

    val        Number      Value to extract sign from

    ---
    Returns    Number      Unit sign value (-1, 0 or 1)

*/

export default function (

    val

) {

    return val === 0 ? 0 : val > 0 ? 1 : -1;
}