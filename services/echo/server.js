import http from "node:http";
import { clamp } from "../../src/index.js";

// Answers what the library answers, for tests that reach it over the network.
http
  .createServer((request, response) => {
    const { searchParams } = new URL(request.url, "http://echo");
    const value = Number(searchParams.get("value"));
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify({ version: "echo-2", clamped: clamp(value, 0, 10) }));
  })
  .listen(3000);
