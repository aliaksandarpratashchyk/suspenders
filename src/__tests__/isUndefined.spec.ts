/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isUndefined from "../isUndefined";

describe(isUndefined.name, () => {
    describe.each`
        value            | expected
        ${undefined}     | ${true}
        ${null}          | ${false}
        ${true}          | ${false}
        ${false}         | ${false}
        ${0}             | ${false}
        ${1}             | ${false}
        ${''}            | ${false}
        ${'string'}      | ${false}
        ${{}}            | ${false}
        ${[]}            | ${false}
        ${() => {}}      | ${false}
        ${Symbol('foo')} | ${false}
        ${BigInt(10)}    | ${false}
    `('given $value', ({ value, expected }) => {
        it(`should return "${expected}".`, () => {
            expect(isUndefined(value)).toBe(expected);
        });
    });
});