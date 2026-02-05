/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isSymbol from "../isSymbol";

describe(isSymbol.name, () => {
    describe.each`
        value              | expected
        ${Symbol('foo')}   | ${true}
        ${Symbol.iterator} | ${true}
        ${1}               | ${false}
        ${0}               | ${false}
        ${''}              | ${false}
        ${null}            | ${false}
        ${undefined}       | ${false}
        ${{}}              | ${false}
        ${[]}              | ${false}
        ${true}            | ${false}
        ${false}           | ${false}
    `('given $value', ({ expected, value }) => {
        it(`should return "${expected}".`, () => {
            expect(isSymbol(value)).toBe(expected);
        });
    });
});