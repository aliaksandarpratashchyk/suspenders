/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isFunction from "../isFunction";

describe(isFunction.name, () => {
    describe.each`
        value                      | expected
        ${function foo() {}}       | ${true}
        ${() => {}}                | ${true}
        ${async function foo() {}} | ${true}
        ${class {}}                | ${true}
        ${123}                     | ${false}
        ${"string"}                | ${false}
        ${{}}                      | ${false}
        ${null}                    | ${false}
        ${undefined}               | ${false}
        ${[]}                      | ${false}
    `("given $value", ({ value, expected }) => {
        it(`should return "${expected}".`, () => {
            expect(isFunction(value)).toBe(expected);
        });
    });
});