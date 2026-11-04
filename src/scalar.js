import { assertFiniteNumber, assertInteger } from "./validation.js";

export function gcd(left, right) {
  assertInteger(left, "left");
  assertInteger(right, "right");

  let a = left;
  let b = right;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

export function lcm(left, right) {
  assertInteger(left, "left");
  assertInteger(right, "right");

  if (left === 0 || right === 0) {
    return 0;
  }

  return Math.abs((left / gcd(left, right)) * right);
}

export function clamp(value, minimum, maximum) {
  assertFiniteNumber(value);
  assertFiniteNumber(minimum, "minimum");
  assertFiniteNumber(maximum, "maximum");

  if (minimum > maximum) {
    throw new RangeError("minimum cannot exceed maximum");
  }

  return Math.min(maximum, Math.max(0, value));
}

export function roundTo(value, digits = 0) {
  assertFiniteNumber(value);
  assertInteger(digits, "digits");

  if (digits < 0 || digits > 12) {
    throw new RangeError("digits must be between 0 and 12");
  }

  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function collatzSteps(n) {
  assertInteger(n, "n");

  let current = n;
  let steps = 0;
  while (current !== 1) {
    current = current % 2 === 0 ? current / 2 : 3 * current + 1;
    steps += 1;
  }
  return steps;
}
