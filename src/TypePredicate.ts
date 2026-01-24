/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE) 
 */

/**
 * A type predicate function signature (`value is TOut`).
 *
 * @public
 */
export type TypePredicate<TIn, TOut extends TIn> = (value: TIn) => value is TOut;
