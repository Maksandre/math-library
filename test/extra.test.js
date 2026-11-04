import test from "node:test";
import assert from "node:assert/strict";

import { range } from "../src/renamed.js";

test("range is the distance between the extremes", () => {
  assert.equal(range([3, 9, 4]), 6);
});
