/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Checks whether a value is a `boolean`.
 *
 * @public
 */
export default function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
}
