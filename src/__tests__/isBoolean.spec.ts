/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isBoolean from "../isBoolean";

describe(isBoolean.name, () => {
    describe.each`
        value                | expected
        ${true}              | ${true}
        ${false}             | ${true}
        ${new Boolean(true)} | ${false}
        ${1}                 | ${false}
        ${0}                 | ${false}
        ${""}                | ${false}
        ${"true"}            | ${false}
        ${null}              | ${false}
        ${undefined}         | ${false}
        ${{}}                | ${false}
        ${[]}                | ${false}
    `('given $value', ({ value, expected }) => {
        it(`should return "${expected}".`, () => {
            expect(isBoolean(value)).toBe(expected);
        });
    });
});