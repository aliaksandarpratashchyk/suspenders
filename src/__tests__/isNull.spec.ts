/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isNull from "../isNull";

describe(isNull.name, () => {
    describe.each`
        value            | expected
        ${null}          | ${true}
        ${undefined}     | ${false}
        ${0}             | ${false}
        ${''}            | ${false}
        ${{}}            | ${false}
        ${[]}            | ${false}
        ${false}         | ${false}
        ${true}          | ${false}
        ${Symbol('foo')} | ${false}
        ${() => {}}      | ${false}
    `('given $value', ({ value, expected }) => {
        it(`should return "${expected}".`, () => {
            expect(isNull(value)).toBe(expected);
        });
    });
});