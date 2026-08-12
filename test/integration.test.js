import test from "node:test";
import assert from "node:assert/strict";

import { mean, normalize, RunningStats } from "../src/index.js";

test("normalized samples can feed running statistics", () => {
  const samples = normalize([10, 20, 30]);
  const stats = new RunningStats(samples);

  assert.deepEqual(samples, [0, 0.5, 1]);
  assert.equal(mean(samples), 0.5);
  assert.equal(stats.mean, 0.5);
  assert.equal(stats.min, 0);
  assert.equal(stats.max, 1);
});
