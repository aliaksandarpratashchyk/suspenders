/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Checks whether a value is a `symbol`.
 *
 * @public
 */
export default function isSymbol(value: unknown): value is symbol {
    return typeof value === 'symbol';
}
