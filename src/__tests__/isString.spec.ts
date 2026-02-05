/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isString from "../isString";

describe(isString.name, () => {
    describe.each`
        value               | expected
        ${"hello"}          | ${true}
        ${""}               | ${true}
        ${new String("hi")} | ${false}
        ${42}               | ${false}
        ${true}             | ${false}
        ${{}}               | ${false}
        ${[]}               | ${false}
        ${null}             | ${false}
        ${undefined}        | ${false}
    `("given $value", ({ expected, value }) => {
        it(`should return "${expected}".`, () => {
            expect(isString(value)).toBe(expected);
        });
    });
});