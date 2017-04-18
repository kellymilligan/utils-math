/*
    Return a tween instance for dolly sequencing.
    Assumes the store is an object of normalised values used to animate the sequence,
    helps to abstract the start, value update, and cleanup of tween instances.
    ---

    store            object     object containing animation properties
    property         String     key of the property to be updated on tick

    startingValue    Number     base value to apply interpolated value to
    duration         Number     duration of tween
    delay            Number     delay before starting tween
    easing           String     name of easing function to use

    ---
    Returns          Tween      tween class instance

*/

import Tween from './tween';

export default function (

    store,
    property,

    startingValue = 0,
    duration = 1000,
    delay = 0,
    easing = 'linear'

) {

    let tween = new Tween(
        duration,
        easing,
        (value, progress) => { store[property] = startingValue + value; },
        () => { tween = null; }
    );

    tween.start( delay );

    return tween;
}