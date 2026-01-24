/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import type { Constructor } from "./Constructor";
import type { TypePredicate } from "./TypePredicate";

/**
 * Creates a type predicate that checks `value instanceof ctor`.
 *
 * @public
 */
export default function isInstanceOf<T>(ctor: Constructor<T>): TypePredicate<unknown, T> {
    return (value: unknown): value is T => value instanceof ctor;
}
