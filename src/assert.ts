/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE) 
 */

import isBigInt from "./isBigInt";
import isBoolean from "./isBoolean";
import type { TypePredicate } from "./TypePredicate";
import isFunction from "./isFunction";
import isNumber from "./isNumber";
import isPlainObject from "./isPlainObject";
import isString from "./isString";
import isSymbol from "./isSymbol";
import type { Constructor } from "./Constructor";
import isInstanceOf from "./isInstanceOf";
import exclude from "./exclude";
import isUndefined from "./isUndefined";
import isNull from "./isNull";
import isDate from "./isDate";

/**
 * The base assertion function signature.
 *
 * When `condition` is falsy, it throws an `Error` (or a custom message).
 *
 * @public
 */
export type Assert = (condition: boolean, message?: string) => asserts condition;

function assert(
    condition: boolean, 
    message?: string
): asserts condition {
    if (!condition) {
        throw new Error(message ?? 'Assertion failed');
    }        
}

/**
 * Builds an assertion function from a runtime predicate.
 *
 * When the predicate returns `false`, it throws a `TypeError` (or a custom message).
 *
 * @public
 */
export type TypeAssert<TIn, TOut extends TIn> = (value: TIn) => asserts value is TOut;

export function createTypeAssert<TIn, TOut extends TIn>(
    predicate: TypePredicate<TIn, TOut>, 
    message?: string
): TypeAssert<TIn, TOut> {
    return (value: TIn): asserts value is TOut => {
        if (!predicate(value)) {
            throw new TypeError(message ?? 'Assertion failed');
        }        
    };
}

assert.type = createTypeAssert;

assert.bigInt = createTypeAssert(isBigInt, 'Value is not a bigint');
assert.boolean = createTypeAssert(isBoolean, 'Value is not a boolean.');
assert.date = createTypeAssert(isDate);
assert.function = createTypeAssert(isFunction, 'Value is not a function.');
assert.number = createTypeAssert(isNumber, 'Value is not a number.');
assert.plainObject = createTypeAssert(isPlainObject, 'Value is not an object.');
assert.string = createTypeAssert(isString, 'Value is not a string.');
assert.symbol = createTypeAssert(isSymbol, 'Value is not a symbol.');

/**
 * Builds an `instanceof` assertion function for the provided constructor.
 *
 * @public
 */
export function createInstanceOfAssert<T>(ctor: Constructor<T>): TypeAssert<unknown, T> {
    return createTypeAssert(isInstanceOf(ctor), `Value is not an instance of ${ctor.name}.`);    
} 

assert.instanceOf = createInstanceOfAssert;

function assertNot<TIn, TExclude extends TIn>(
    predicate: TypePredicate<TIn, TExclude>, 
    message?: string): 
    <TSource extends TIn>(value: TSource) => asserts value is Exclude<TSource, TExclude> {
    return createTypeAssert(exclude(predicate), message);
} 

assert.not = assertNot;

assert.notUndefined = assertNot(isUndefined, 'Value must not be undefined');
assert.notNull = assertNot(isNull, 'Value must not be null');

/**
 * The full `assert` API surface.
 *
 * @public
 */
export interface AssertKIT {
    /**
     * Asserts that a condition is truthy.
     */
    (condition: boolean, message?: string): asserts condition;

    /**
     * Builds an assertion function from a runtime predicate.
     * 
     * @param predicate - The predicate to base the assertion on.
     * @param message - Optional custom error message.
     * @returns An assertion function.
     */
    type: <TIn, TOut extends TIn>(predicate: TypePredicate<TIn, TOut>, message?: string) => TypeAssert<TIn, TOut>;

    /**
     * Asserts that a value is a `bigint`.     
     */
    bigInt: TypeAssert<unknown, bigint>;

    /**
     * Asserts that a value is a `boolean`.
     */
    boolean: TypeAssert<unknown, boolean>;

    /**
     * Asserts that a value is a `Date`.
     */
    date: TypeAssert<unknown, Date>;

    /**
     * Asserts that a value is a `Function`.
     */
    function: TypeAssert<unknown, Function>;

    /**
     * Asserts that a value is a `number`.
     */
    number: TypeAssert<unknown, number>;

    /**
     * Asserts that a value is a plain object.
     */
    plainObject: TypeAssert<unknown, object>;

    /**
     * Asserts that a value is a `string`.
     */
    string: TypeAssert<unknown, string>;

    /**
     * Asserts that a value is a `symbol`.
     */
    symbol: TypeAssert<unknown, symbol>;

    /**
     * Asserts that a value is an instance of the provided constructor.
     * 
     * @param ctor - The constructor to check against.
     * @returns An assertion function.
     */
    instanceOf: <T>(ctor: Constructor<T>) => TypeAssert<unknown, T>;

    /**
     * Asserts that a value does NOT satisfy the provided predicate.
     * 
     * @param predicate - The predicate to negate.
     * @param message - Optional custom error message.     
     */
    not: <TIn, TExclude extends TIn>(
        predicate: TypePredicate<TIn, TExclude>, 
        message?: string) => <TSource extends TIn>(value: TSource) => asserts value is Exclude<TSource, TExclude>;

    /**
     * Asserts that a value is NOT `undefined`.
     * 
     * @param value - The value to check.     
     */
    notUndefined: <TIn>(value: TIn) => asserts value is Exclude<TIn, undefined>;

    /**
     * Asserts that a value is NOT `null`.
     * 
     * @param value - The value to check.     
     */
    notNull: <TIn>(value: TIn) => asserts value is Exclude<TIn, null>;
}

/**
 * Assertion helpers that throw when a runtime check fails.
 *
 * @public
 */
const assertKIT: AssertKIT = assert;  

export default assertKIT;
