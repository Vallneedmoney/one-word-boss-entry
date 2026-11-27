// Entry point for "One Word for the Boss" (make.fun).
// The whole entry is one invented word, printed exactly as-is into
// /output/entry.txt: a boss who sprays blame in every direction like a
// flamethrower, then walks through the smoke as if nothing happened.
// No trailing newline — the file holds the word and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Blamethrower";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, WORD, "utf8");
console.log(`wrote ${WORD.length} chars to ${target}`);
