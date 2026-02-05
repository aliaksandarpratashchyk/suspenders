/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isBoolean from "./isBoolean"
import isNull from "./isNull"
import isNumber from "./isNumber"
import isString from "./isString"
import isSymbol from "./isSymbol"
import isUndefined from "./isUndefined"

/**
 * Checks whether a value is an object.
 *
 * @public
 */
export default function isObject(value: unknown): value is object {
    return !isNumber(value) &&
        !isString(value) &&
        !isBoolean(value) &&
        !isSymbol(value) && 
        !isNull(value) &&
        !isUndefined(value);
}
