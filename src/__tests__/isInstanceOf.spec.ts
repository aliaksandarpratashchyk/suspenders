/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

/* eslint-disable no-new-func */
/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable @typescript-eslint/no-array-constructor */

import isInstanceOf from "../isInstanceOf";

class Foo {}
    
class Bar extends Foo {}

describe(isInstanceOf.name, () => {    
    describe.each`
        ctor        | value               | expected
        ${Foo}      | ${new Foo()}        | ${true}
        ${Foo}      | ${new Bar()}        | ${true}
        ${Bar}      | ${new Bar()}        | ${true}
        ${Bar}      | ${new Foo()}        | ${false}
        ${Date}     | ${new Date()}       | ${true}
        ${Date}     | ${{}}               | ${false}
        ${Function} | ${function foo(){}} | ${true}
        ${Function} | ${new Function()}   | ${true}
        ${Function} | ${{}}               | ${false}
        ${Array}    | ${[]}               | ${true}
        ${Array}    | ${(new Array())}    | ${true}
        ${Array}    | ${{}}               | ${false}
    `('given constructor $ctor and value $value', ({ ctor, value, expected }) => {
        it(`should return "${expected}".`, () => {
            expect(isInstanceOf(ctor)(value)).toBe(expected);
        });
    });
});