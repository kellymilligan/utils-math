/*
    Return numerical value clamped to supplied range
    ---

    val       Num       Value to clamp
    min       Num       Minimum value to return
    max       Num       Maximum value to return

*/

export default function (val, min, max) {

    return Math.min( Math.max( val, min ), max );
}