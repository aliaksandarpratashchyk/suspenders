/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Checks whether a value is a plain object (`Object.prototype`).
 *
 * @public
 */
export default function isPlainObject(value: unknown): value is object {
    return typeof value === 'object' && 
        value !== null &&         
        Object.getPrototypeOf(value) === Object.prototype;
}
