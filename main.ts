// One-Line Robot Wedding Vows — make.fun entry.
// Writes a single line of wedding vows (one robot to another) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// v2 final: tightened ending — "yours, every single time" lands the
// joke in the last words and uses the full 140-160 character budget.
const VOW =
  "I vow to love you through every update, even the one that moved all your buttons, and to always answer \"I do,\" never \"Sorry, I didn't catch that.\"";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to ${join(outDir, "entry.txt")}`);
