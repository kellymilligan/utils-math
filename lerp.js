/*
    Lerp (Linear Interpolate) between 2 values
    ---

    a          Number      First value
    b          Number      Second value

    alpha      Number      Normalised progress value (from 0-1)

    ---
    Returns    Number      Interpolated value

*/

export default function (

    a, b,

    alpha = 0.5 // Default to half way between values

) {

    return a + alpha * ( b - a );
}