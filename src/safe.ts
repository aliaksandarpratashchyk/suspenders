/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE) 
 */

import type { Constructor } from "./Constructor";
import type { TypePredicate } from "./TypePredicate";

import exclude from "./exclude";
import isBigInt from "./isBigInt";
import isBoolean from "./isBoolean";
import isDate from "./isDate";
import isFunction from "./isFunction";
import isInstanceOf from "./isInstanceOf";
import isNull from "./isNull";
import isNumber from "./isNumber";
import isObject from "./isObject";
import isPlainObject from "./isPlainObject";
import isString from "./isString";
import isSymbol from "./isSymbol";
import isUndefined from "./isUndefined";

/**
 * A cast function signature.
 *
 * @public
 */
export type Cast<TIn = unknown, TOut = unknown> = (value: TIn) => TOut;

/**
 * Builds a type-safe cast function from a runtime predicate.
 *
 * The returned function throws a `TypeError` if the predicate returns `false`.
 *
 * @public
 */
export function safe<TIn, TOut extends TIn>(
    predicate: TypePredicate<TIn, TOut>, 
    message?: string): 
    Cast<TIn, TOut> {
    return (value: TIn): TOut => {
        if (!predicate(value)) {
            throw new TypeError(message ?? 'Assertion failed');
        }
        return value;
    };
}

safe.bigInt = safe(isBigInt, 'Value is not a bigint.');
safe.boolean = safe(isBoolean, 'Value is not a boolean.');
safe.date = safe(isDate);
safe.function = safe(isFunction, 'Value is not a function.');
safe.number = safe(isNumber, 'Value is not a number.');
safe.object = safe(isObject, 'Value is not an object.');
safe.plainObject = safe(isPlainObject, 'Value is not a plain object.');
safe.string = safe(isString, 'Value is not a string.');
safe.symbol = safe(isSymbol, 'Value is not a symbol.');

/**
 * Builds an `instanceof` cast function for the provided constructor.
 *
 * @public
 */
export function safeInstanceOf<T>(ctor: Constructor<T>): Cast<unknown, T> {
    return safe(isInstanceOf(ctor), `Value is not an instance of ${ctor.name}.`);    
} 

safe.instanceOf = safeInstanceOf;

/**
 * Builds a negated cast function from the provided predicate.
 * 
 * @public
 */
export function safeNot<TIn, TExclude extends TIn>(
    predicate: TypePredicate<TIn, TExclude>, 
    message?: string): 
    <TSource extends TIn>(value: TSource) => Exclude<TSource, TExclude> {
    return safe(exclude(predicate), message);
} 

safe.not = safeNot;
safe.notUndefined = safeNot(isUndefined, 'Value must not be undefined');
safe.notNull = safeNot(isNull, 'Value must not be null');


/**
 * The full `cast` API surface.
 *
 * @public
 */
export interface CastKIT {    
    <TIn, TOut extends TIn>(predicate: TypePredicate<TIn, TOut>, message?: string): Cast<TIn, TOut>;

    /**
     * Safely casts to `bigint`.
     */
    bigInt: Cast<unknown, bigint>;

    /**
     * Safely casts to `boolean`.
     */
    boolean: Cast<unknown, boolean>;

    /**
     * Safely casts to `Date`.
     */
    date: Cast<unknown, Date>;

    /**
     * Safely casts to `Function`.
     */
    function: Cast<unknown, Function>;

    /**
     * Asserts that a value is an instance of the provided constructor.
     * 
     * @param ctor - The constructor to check against.
     * @returns An assertion function.
     */
    instanceOf: <T>(ctor: Constructor<T>) => Cast<unknown, T>;

    /**
     * Safely casts to exclude the type checked by the provided predicate.
     * 
     * @param predicate - The predicate to negate.
     * @param message - Optional custom error message.     
     */
    not: <TIn, TExclude extends TIn>(
        predicate: TypePredicate<TIn, TExclude>, 
        message?: string) => <TSource extends TIn>(value: TSource) => Exclude<TSource, TExclude>;

    /**
     * Safely casts to non-`null`.
     * 
     * @param value - The value to check.     
     */
    notNull: <TIn>(value: TIn) => Exclude<TIn, null>;

    /**
     * Safely casts to non-`undefined`.
     * 
     * @param value - The value to check.     
     */
    notUndefined: <TIn>(value: TIn) => Exclude<TIn, undefined>;

    /**
     * Safely casts to `number`.
     */
    number: Cast<unknown, number>;

    /**
     * Safely casts to object.
     */
    object: Cast<unknown, object>;

    /**
     * Safely casts to plain object.
     */
    plainObject: Cast<unknown, object>;

    /**
     * Safely casts to `string`.
     */
    string: Cast<unknown, string>;

    /**
     * Safely casts to `symbol`.
     */
    symbol: Cast<unknown, symbol>;
}

/**
 * Assertion helpers that throw when a runtime check fails.
 *
 * @public
 */
const castKIT: CastKIT = safe;  

export default castKIT;

