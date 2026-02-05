/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * A constructor signature for `new (...args) => T`.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = unknown> = new (...args: any[]) => T;
