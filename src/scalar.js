function assertFiniteNumber(value, name = "value") {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

function assertInteger(value, name = "value") {
  assertFiniteNumber(value, name);
  if (!Number.isInteger(value)) {
    throw new TypeError(`${name} must be an integer`);
  }
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
