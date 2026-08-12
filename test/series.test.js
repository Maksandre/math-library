import test from "node:test";
import assert from "node:assert/strict";

import {
  mean,
  median,
  movingAverage,
  normalize,
  percentile,
  sum,
} from "../src/index.js";

test("sum and mean aggregate finite values", () => {
  assert.equal(sum([2, 4, 6, 8]), 20);
  assert.equal(mean([2, 4, 6, 8]), 5);
});

test("median handles odd and even collections", () => {
  assert.equal(median([9, 1, 5]), 5);
  assert.equal(median([8, 2, 4, 6]), 5);
});

test("percentile selects a value from an ordered distribution", () => {
  assert.equal(percentile([50, 10, 40, 20, 30], 0.5), 30);
  assert.equal(percentile([5, 1, 3, 2, 4], 0), 1);
});

test("movingAverage validates its window", () => {
  assert.throws(() => movingAverage([1, 2, 3], 0), RangeError);
  assert.throws(() => movingAverage([1, 2, 3], 4), RangeError);
});

test("normalize maps a series onto the unit interval", () => {
  assert.deepEqual(normalize([0, 5, 10]), [0, 0.5, 1]);
});
