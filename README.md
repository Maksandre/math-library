# math-library

Small maths helpers.

- `src/` is the library, tested with `node --test test/*.test.js`.
- `packages/format/` is a package of its own with one npm dependency: run `npm install` there, then `npm test`.
- `services/echo/` is a small HTTP service built from this repository, listening on port 3000. `test/e2e/` runs against it, by its service name `echo`: an end-to-end test needs that service running beside the tests.
