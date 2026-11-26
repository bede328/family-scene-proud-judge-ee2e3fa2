// SPDX-License-Identifier: MIT
// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene (one line, 130 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const SCENE =
  "At dinner, my sister announced she's marrying her teddy bear. Dad stood up, shook its paw, and said, \"Welcome to the family, son.\"";

const lines = SCENE.split("\n");
if (SCENE.length < 1 || SCENE.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${SCENE.length}`);
}
if (lines.length < 1 || lines.length > 2) {
  throw new Error(`entry must be 1-2 lines, got ${lines.length}`);
}
if (SCENE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
console.log(`Wrote ${SCENE.length} characters, ${lines.length} line(s) to /output/entry.txt`);
