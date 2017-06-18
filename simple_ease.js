/*
    Calculate a simple ease between the current and target values
    ---

    current         Number      Current value
    target          Number      Target value
    ease_factor     Number      Easing strength factor

    ---
    Returns         Number      Adjusted value

*/

export default function (

    current, target,

    ease_factor = 0.1

) {

    return current + ( target - current ) * ease_factor;
}