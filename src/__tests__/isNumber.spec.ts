/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isNumber from "../isNumber";

describe(isNumber, () => {
    describe.each`
        value               | expected
        ${42}               | ${true}
        ${-3.14}            | ${true}
        ${0}                | ${true}
        ${Number.MAX_VALUE} | ${true}
        ${Number.MIN_VALUE} | ${true}
        ${NaN}              | ${true}
        ${Infinity}         | ${true}
        ${-Infinity}        | ${true}
        ${"42"}             | ${false}
        ${{}}               | ${false}
        ${[]}               | ${false}
        ${null}             | ${false}
        ${undefined}        | ${false}
        ${true}             | ${false}
        ${() => 42}         | ${false}
    `("given $value", ({ value, expected }) => {
        it(`should return "${expected}".`, () => {
            expect(isNumber(value)).toBe(expected);
        });
    });
});