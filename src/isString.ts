/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Checks whether a value is a `string`.
 *
 * @public
 */
export default function isString(value: unknown): value is string {
    return typeof value === 'string';
}
