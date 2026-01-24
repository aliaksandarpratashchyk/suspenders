/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Checks whether a value is `undefined`.
 *
 * @public
 */
export default function isUndefined(value: unknown): value is undefined {
    return typeof value === 'undefined';
}
