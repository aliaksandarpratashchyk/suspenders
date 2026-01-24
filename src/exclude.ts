/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE) 
 */

import type { TypePredicate } from "./TypePredicate";

/**
 * Produces a predicate that negates another predicate.
 *
 * @public
 */
export default function exclude<TIn, TExclude extends TIn>(predicate: TypePredicate<TIn, TExclude>):
    <TSource extends TIn>(value: TSource) => value is Exclude<TSource, TExclude> {
    return <TSource extends TIn>(value: TSource): value is Exclude<TSource, TExclude> => !predicate(value);
}
