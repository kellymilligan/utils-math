/*
    Lerp (Linear Interpolate) between 2 values
    ---

    a          Number      First value
    b          Number      Second value

    p          Number      Normalised progress value (from 0-1)

    ---
    Returns    Number      Interpolated value

*/

export default function (

    a, b,

    p = 0.5 // Default to half way between values

) {

    return a + p * ( b - a );
}