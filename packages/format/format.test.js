import test from "node:test";
import assert from "node:assert/strict";
import { humanDuration } from "./index.js";

test("a minute reads as a minute", () => {
  assert.equal(humanDuration(60000), "1 minute");
});
