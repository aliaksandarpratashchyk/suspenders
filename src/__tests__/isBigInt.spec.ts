/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isBigInt from "../isBigInt";

describe(isBigInt.name, () => {
    describe.each`
        value            | expected
        ${BigInt(10)}    | ${true}
        ${BigInt(-5)}    | ${true}
        ${0n}            | ${true}
        ${undefined}     | ${false}
        ${null}          | ${false}
        ${0}             | ${false}
        ${''}            | ${false}
        ${{}}            | ${false}
        ${[]}            | ${false}
        ${false}         | ${false}
        ${true}          | ${false}
        ${Symbol('foo')} | ${false}
        ${() => {}}      | ${false}
    `('given $value', ({ expected, value }) => {
        it(`should return "${expected}".`, () => {
            expect(isBigInt(value)).toBe(expected);
        });
    });
});