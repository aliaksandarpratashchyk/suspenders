/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/* eslint-disable no-new-func */
/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable @typescript-eslint/no-array-constructor */

import isPlainObject from "../isPlainObject";

describe(isPlainObject.name, () => {
    describe.each`
        value                    | expected
        ${ { a: 1 } }            | ${ true }
        ${ new Object() }        | ${ true }
        ${ [1, 2, 3] }           | ${ false }
        ${ new Array() }         | ${ false }
        ${ () => {} }            | ${ false }
        ${ new Function() }      | ${ false }
        ${ 42 }                  | ${ false }
        ${ new Number(42) }      | ${ false }
        ${ 'hello' }             | ${ false }
        ${ new String('hello') } | ${ false }
        ${ true }                | ${ false }
        ${ new Boolean(true) }   | ${ false }
        ${ null }                | ${ false }
        ${ undefined }           | ${ false }
        ${ new Date() }          | ${ false }
    `('given $value', ({ expected, value }) => {
        it(`should return "${expected}".`, () => {
            expect(isPlainObject(value)).toBe(expected);
        });
    });    
});