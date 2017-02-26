/*
    Penner's easing equations ported to accept a single normalised progress value
    ---

    ratio      Number      Normalised progress value (from 0-1)

    ---
    Returns    Number      Normalised value with easing applied

*/

// Sine

export function easeInSine(ratio) {

    return -1 * Math.cos( ratio * ( Math.PI / 2 ) ) + 1;
}

export function easeOutSine(ratio) {

    return 1 * Math.sin( ratio * ( Math.PI / 2 ) );
}

export function easeInOutSine(ratio) {

    return -1 / 2 * ( Math.cos( Math.PI * ratio / 1 ) - 1 );
}

// Quad

export function easeInQuad(ratio) {

    return ratio * ratio;
}

export function easeOutQuad(ratio) {

    return -1 * ratio * ( ratio - 2 );
}

export function easeInOutQuad(ratio) {

    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * ratio * ratio;
    ratio--;
    return -1 / 2 * ( ratio * ( ratio - 2 ) - 1 );
}

// Cubic

export function easeInCubic(ratio) {

    return ratio * ratio * ratio;
}

export function easeOutCubic(ratio) {

    ratio--;
    return ( ratio * ratio * ratio + 1 );
}

export function easeInOutCubic(ratio) {

    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * ratio * ratio * ratio;
    ratio -= 2;
    return 1 / 2 * ( ratio * ratio * ratio + 2 );
}

// Quart

export function easeInQuart(ratio) {

    return ratio * ratio * ratio * ratio;
}

export function easeOutQuart(ratio) {

    ratio--;
    return -1 * ( ratio * ratio * ratio * ratio - 1);
}

export function easeInOutQuart(ratio) {

    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * ratio * ratio * ratio * ratio;
    ratio -= 2;
    return -1 / 2 * ( ratio * ratio * ratio * ratio - 2 );
}

// Quint

export function easeInQuint(ratio) {

    return ratio * ratio * ratio * ratio * ratio;
}

export function easeOutQuint(ratio) {

    ratio--;
    return ratio * ratio * ratio * ratio * ratio + 1;
}

export function easeInOutQuint(ratio) {

    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * ratio * ratio * ratio * ratio * ratio;
    ratio -= 2;
    return 1 / 2 * ( ratio * ratio * ratio * ratio * ratio + 2 );
}

// Expo

export function easeInExpo(ratio) {

    return Math.pow( 2, 10 * ( ratio - 1 ) );
}

export function easeOutExpo(ratio) {

    return -Math.pow( 2, -10 * ratio ) + 1;
}

export function easeInOutExpo (ratio) {

    ratio /= 1 / 2;
    if ( ratio < 1 ) return 1 / 2 * Math.pow( 2, 10 * ( ratio - 1 ) );
    ratio--;
    return 1 / 2 * ( -Math.pow( 2, -10 * ratio ) + 2 );
}
