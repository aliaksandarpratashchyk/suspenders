/**
 * Suspenders v1.0.0
 * Copyright (c) 2026 Aliaksandar Pratashchyk <aliaksandarpratashchyk@gmail.com>
 * Licensed under MIT (see LICENSE)
 */

import isDate from "../isDate";

describe('isDate', () => {
    describe.each`
        value                            | expected
        ${new Date()}                    | ${true}
        ${new Date('2020-01-01')}        | ${true}                
        ${Date.now()}                    | ${false}
        ${'2020-01-01'}                  | ${false}
        ${1234567890}                    | ${false}
        ${{}}                            | ${false}
        ${null}                          | ${false}
        ${undefined}                     | ${false}
        ${[]}                            | ${false}
    `('given $value', ({ expected, value }) => {
        it(`should return "${expected}".`, () => {            
            expect(isDate(value)).toBe(expected);
        });
    });
});