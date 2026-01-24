/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isInstanceOf from "./isInstanceOf";

/**
 * Checks whether a value is a `Date` instance.
 *
 * @public
 */
const isDate = isInstanceOf(Date);

export default isDate;
