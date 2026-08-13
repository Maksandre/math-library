import { assertInteger } from "./validation.js";

// Beyond 170 the result exceeds Number.MAX_VALUE and becomes Infinity,
// so the input is capped to keep every answer a finite number.
const MAX_INPUT = 170;

export function factorial(value) {
  assertInteger(value, "value");

  if (value < 0 || value > MAX_INPUT) {
    throw new RangeError(`value must be between 0 and ${MAX_INPUT}`);
  }

  let product = 1;
  for (let factor = 2; factor <= value; factor += 1) {
    product *= factor;
  }

  return product;
}
