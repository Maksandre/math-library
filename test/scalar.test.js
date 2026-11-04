import test from "node:test";
import assert from "node:assert/strict";

import { clamp, collatzSteps, gcd, lcm, roundTo } from "../src/index.js";

test("integer helpers calculate common factors and multiples", () => {
  assert.equal(gcd(54, 24), 6);
  assert.equal(gcd(17, 13), 1);
  assert.equal(lcm(6, 8), 24);
  assert.equal(lcm(0, 9), 0);
});

test("clamp keeps values inside a zero-based interval", () => {
  assert.equal(clamp(-2, 0, 10), 0);
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(12, 0, 10), 10);
});

test("roundTo rounds to the requested decimal places", () => {
  assert.equal(roundTo(12.345, 2), 12.35);
  assert.equal(roundTo(12.341, 2), 12.34);
  assert.equal(roundTo(9.9, 0), 10);
});

test("collatzSteps counts the steps down to one", () => {
  assert.equal(collatzSteps(1), 0);
  assert.equal(collatzSteps(6), 8);
  assert.equal(collatzSteps(27), 111);
});
