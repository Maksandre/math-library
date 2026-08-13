# `factorial`

Computes the factorial of a non-negative integer.

```js
import { factorial } from "tiny-math-kit";

factorial(0); // 1
factorial(5); // 120
```

## API

### `factorial(value)`

- `value` — a non-negative integer between **0 and 20** (inclusive).
- Returns the product `value * (value - 1) * ... * 1`, with `factorial(0)` defined as `1`.

Throws a `TypeError` when `value` is not an integer, and a `RangeError` when
`value` is outside the supported range.
