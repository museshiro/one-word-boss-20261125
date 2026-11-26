import { mkdirSync, writeFileSync } from "node:fs";

// One Word for the Boss — the boss who can never land a decision.
// He waffles: yes on Monday, maybe on Tuesday, "let's circle back" by Friday.
// The word is the joke: a waffler dithers, and the breakfast food makes it
// sound silly out loud — the kind of word a colleague repeats at lunch.
const first = "Waff";
const second = "ler";
const word = first + second;
// Seven letters, one word, no spaces, no trailing newline.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
