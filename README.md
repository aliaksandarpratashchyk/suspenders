# Suspenders

![CI](https://github.com/aliaksandarpratashchyk/suspenders/actions/workflows/test.yml/badge.svg)
[![Coverage](./coverage.svg)](./COVERAGE.md)

Suspenders is a small TypeScript-first assertion and type-guard toolkit for runtime validation and type narrowing.

## Installation

```bash
npm i @aliaksandarpratashchyk/suspenders
```

## Usage

```ts
import { assert, isNumber, safe, unsafe } from "@aliaksandarpratashchyk/suspenders";

const value: unknown = "123";

// Type guard: narrow in an if-statement
if (isNumber(value)) {
  value.toFixed(2);
}

// Assertion: throws and narrows the type (via `asserts`)
assert(typeof value === "string");
assert.string(value);

// Safe cast: returns a typed value or throws a TypeError
const asNumber = safe.number;
const n = asNumber(123);

// Unsafe cast: no runtime checks
const definitelyNumber = unsafe<number>(value);
```

## API Reference

- Run `npm run build` to regenerate API docs into `docs/`.

## Scripts

- `npm test` — run the Jest suite, regenerate `COVERAGE.md`, and update `coverage.svg`.
- `npm run build` — bundle the library and regenerate API docs (`docs/`).
- `npm run lint` / `npm run format` — lint and format the codebase.

## Publishing

GitHub Actions runs tests on pushes/PRs and publishes to npm when the version in `package.json` changes on `main`. Set `NPM_TOKEN` in repository secrets to enable publishing.
