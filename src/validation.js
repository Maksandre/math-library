export function assertFiniteNumber(value, name = "value") {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

export function assertInteger(value, name = "value") {
  assertFiniteNumber(value, name);
  if (!Number.isInteger(value)) {
    throw new TypeError(`${name} must be an integer`);
  }
}

export function assertSeries(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }

  for (let index = 0; index < values.length; index += 1) {
    assertFiniteNumber(values[index], `values[${index}]`);
  }

  return values;
}
