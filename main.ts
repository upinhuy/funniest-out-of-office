// The Funniest Out-of-Office — make.fun bounty
// u-kreutzx-the-funniest-out-of-office-054815cf
//
// The program writes a single line of out-of-office auto-reply text
// to /output/entry.txt. The gate requires 1-140 UTF-8 characters,
// one line, no image, no link.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm out of office until Monday. This auto-reply is now in charge of my inbox — it has no password, no patience, and one job: saying no.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters, must be 1-140`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
