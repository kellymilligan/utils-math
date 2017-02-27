/*
    Minimal tween class for interpolating a normalised progress value over a duration.
    Designed to work directly with single-input Penner easing functions.
    ---

    duration               Number        Duration of the tween in milliseconds
    easing                 String        Name of the easing function to apply
    onTickCallback         Function      Callback function to be fired each tick
    onCompleteCallback     Function      Callback function to be fired when the tween completes

    Notes:

    - Tick callback is passed both the 'value' (eased) and 'progress' (linear) values as arguments
    - Tween must be started by calling the 'start' function
    - Tween can be stopped early by calling the 'kill' function
    - For garbage collection, remove reference to the class instance in the onCompleteCallback handler

    Example usage:

    let tween = new Tween( 1000, 'easeInOutCubic',
        function (value, progress) {

            console.log( value, progress );
        },
        function () {

            console.log( 'complete!' );
            tween = null;
        }
    );

    tween.start();

*/

import * as EasingFunctions from './easing.js';

const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

export default class {

    constructor(duration, easing, onTickCallback, onCompleteCallback) {

        this.duration = duration || 1000;
        this.easing = easing || 'easeInOutSine';
        this._onTick = onTickCallback || function () {};
        this._onComplete = onCompleteCallback || function () {};

        this.progress = 0;
        this.value = 0;
        this.running = false;

        this._tick = this._tick.bind( this );
    }

    _tick() {

        // Check if tween has been killed
        if ( !this.running ) {

            this._destroy();
            return;
        }

        // Check for completeness
        if ( this.progress >= 1 ) {

            this.progress = 1;
            this.value = 1;

            this._onTick( this.value, this.progress );
            this._complete();

            return;
        }

        // Continue with next tick
        this.currentTime = Date.now();

        this.progress = ( this.currentTime - this.startTime ) / this.duration;
        this.value = EasingFunctions[ this.easing ]( this.progress );

        this._onTick( Math.min( this.value, 1 ), Math.min( this.progress, 1 ) );

        this.animationFrame = requestAnimationFrame( this._tick );
    }

    _start() {

        this.running = true;

        this.startTime = Date.now();
        this.currentTime = this.startTime;

        this.animationFrame = requestAnimationFrame( this._tick );
    }

    _kill() {

        this.running = false;
    }

    _complete() {

        this._onComplete();
        this._destroy();
    }

    _destroy() {

        this.easing = null;
        this._easingFunction = null;
        this._onTick = null;
        this._onComplete = null;
        this.animationFrame = null;
    }

    start() {

        this._start();
    }

    kill() {

        this._kill();
    }
}