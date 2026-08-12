import test from "node:test";
import assert from "node:assert/strict";

import { RunningStats } from "../src/index.js";

test("RunningStats tracks an evolving collection", () => {
  const stats = new RunningStats([2, 4]);

  stats.add(8);

  assert.equal(stats.count, 3);
  assert.equal(stats.sum, 14);
  assert.equal(stats.mean, 14 / 3);
  assert.equal(stats.min, 2);
  assert.equal(stats.max, 8);
});

test("RunningStats removes an existing interior value", () => {
  const stats = new RunningStats([2, 4, 8]);

  assert.equal(stats.remove(4), true);
  assert.equal(stats.remove(99), false);
  assert.equal(stats.count, 2);
  assert.equal(stats.sum, 10);
  assert.equal(stats.min, 2);
  assert.equal(stats.max, 8);
});
