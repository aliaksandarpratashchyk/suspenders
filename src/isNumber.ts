/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Checks whether a value is a `number`.
 *
 * @public
 */
export default function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}
