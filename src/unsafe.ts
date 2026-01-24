/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Unsafely casts a value to `T` without any runtime validation.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export default function unsafe<T>(value: unknown): T {    
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    return value as T;
}
