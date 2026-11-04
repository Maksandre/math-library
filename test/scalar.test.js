import test from "node:test";
import assert from "node:assert/strict";

import { clamp, collatzSteps } from "../src/index.js";

test("clamp keeps values inside a zero-based interval", () => {
  assert.equal(clamp(-2, 0, 10), 0);
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(12, 0, 10), 10);
});

test("collatzSteps counts the steps down to one", () => {
  assert.equal(collatzSteps(1), 0);
  assert.equal(collatzSteps(6), 8);
  assert.equal(collatzSteps(27), 111);
});
