// One-Sentence Absurd Invention Pitch
// program/v1 entry: writes the pitch sentence to /output/entry.txt.
// The sentence lives in entry.txt (161 characters, one sentence); the
// program copies it verbatim so the gate sees exactly the same text.
// Deterministic, no network, no input: the same sentence on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SENTENCE = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");

if (SENTENCE.length < 1 || SENTENCE.length > 220) {
  throw new Error(`entry.txt must be 1-220 characters, got ${SENTENCE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");

console.log(SENTENCE);
console.log(`(${SENTENCE.length} characters)`);
