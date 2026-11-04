import { assertSeries } from "./validation.js";

export function range(values) {
  assertSeries(values);
  if (values.length === 0) {
    throw new RangeError("values cannot be empty");
  }
  return Math.max(...values) - Math.min(...values);
}
