/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Checks whether a value is a `bigint`.
 *
 * @public
 */
export default function isBigInt(value: unknown): value is bigint {
    return typeof value === 'bigint';
}
