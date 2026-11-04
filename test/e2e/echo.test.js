import test from "node:test";
import assert from "node:assert/strict";

// Runs against the `echo` service, which is built from this repository too.
const base = process.env.ECHO_URL ?? "http://echo:3000";

test("the running service answers from this commit", async () => {
  const response = await fetch(`${base}/?value=42`);
  assert.deepEqual(await response.json(), { version: "echo-2", clamped: 10 });
});
