/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Checks whether a value is a `Function`.
 *
 * @public
 */
export default function isFunction(value: unknown): value is Function {
    return typeof value === 'function';
}
