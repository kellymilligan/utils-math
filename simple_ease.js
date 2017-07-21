/*
    Calculate a simple ease between the current and target values,
    optioanlly round small differences off to optimise draw calls
    ---

    current         Number      Current value
    target          Number      Target value
    ease_factor     Number      optional - Easing strength
    reduce          Boolean     optional - Flag whether to round small values for optimisation

    ---
    Returns         Number      Adjusted value

*/

export default function (

    current, target,

    ease_factor = 0.1,
    reduce = false

) {

    if ( reduce && Math.abs( target - current ) < 0.0002 ) { return target; }

    return current + ( target - current ) * ease_factor;
}