/**
 * Suspenders v1.0.0
 * Copyright (c) 2025 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/**
 * Creates a type predicate function that checks whether a value is strictly equal to the provided value.
 * 
 * @param value - The value to compare against.
 * @returns A type predicate function.
 * 
 * @public
 */
export default function isSame<T>(value: T) {
	return (other: unknown): other is T => value === other;
}
