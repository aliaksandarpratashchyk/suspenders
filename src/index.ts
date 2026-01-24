/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE) 
 */

export { default as assert, type TypeAssert, type Assert, type AssertKIT } from "./assert";
export type { Constructor } from "./Constructor";
export { default as isBigInt } from "./isBigInt";
export { default as isBoolean } from "./isBoolean";
export { default as isDate } from "./isDate";
export { default as isFunction } from "./isFunction";
export { default as isInstanceOf } from "./isInstanceOf";
export { default as isNumber } from "./isNumber";
export { default as isPlainObject } from "./isPlainObject";
export { default as isString } from "./isString";
export { default as isSymbol } from "./isSymbol";
export { default as safe, type Cast, type CastKIT } from "./safe";
export type { TypePredicate } from "./TypePredicate";
export { default as unsafe } from "./unsafe";
