import { mkdirSync, writeFileSync } from "node:fs";

// v2 final word: the boss who escalates every decision upward instead of
// making it — and, like the machine, only ever goes up.
const word = "Escalator";

const targets = ["entry.txt", "/output/entry.txt"];
for (const target of targets) {
  try {
    const slash = target.lastIndexOf("/");
    if (slash > 0) mkdirSync(target.slice(0, slash), { recursive: true });
    writeFileSync(target, word, "utf8");
  } catch {
    // The sandbox path may not exist locally; the local copy is the source of truth.
  }
}
