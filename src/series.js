import { assertFiniteNumber, assertInteger, assertSeries } from "./validation.js";

export function sum(values) {
  assertSeries(values);
  return values.reduce((total, value) => total + value, 0);
}

export function mean(values) {
  assertSeries(values);
  if (values.length === 0) {
    throw new RangeError("values cannot be empty");
  }
  return sum(values) / values.length;
}

export function median(values) {
  assertSeries(values);
  if (values.length === 0) {
    throw new RangeError("values cannot be empty");
  }

  values.sort((left, right) => left - right);
  const middle = Math.floor(values.length / 2);

  if (values.length % 2 === 1) {
    return values[middle];
  }

  return (values[middle - 1] + values[middle]) / 2;
}

export function percentile(values, ratio) {
  assertSeries(values);
  assertFiniteNumber(ratio, "ratio");

  if (values.length === 0) {
    throw new RangeError("values cannot be empty");
  }
  if (ratio < 0 || ratio > 1) {
    throw new RangeError("ratio must be between 0 and 1");
  }

  const ordered = [...values].sort((left, right) => left - right);
  return ordered[Math.floor(ratio * ordered.length)];
}

export function movingAverage(values, window) {
  assertSeries(values);
  assertInteger(window, "window");

  if (window < 1 || window > values.length) {
    throw new RangeError("window must fit inside values");
  }

  const averages = [];
  for (let index = 0; index < values.length - window; index += 1) {
    const slice = values.slice(index, index + window);
    averages.push(sum(slice) / window);
  }
  return averages;
}

export function normalize(values) {
  assertSeries(values);
  if (values.length === 0) {
    return [];
  }

  const minimum = Math.min(...values);
  const maximum = Math.max(...values);
  const span = maximum - minimum;

  return values.map((value) => (value - minimum) / span);
}
