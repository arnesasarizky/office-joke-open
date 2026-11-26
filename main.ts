import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hit reply-all to 214 people asking to be removed from this thread, and now all 214 are replying-all to be removed too, so I printed the thread and filed it under teamwork.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");
const MAX_LENGTH = 200;

function assertWithinLimit(line: string): void {
  if (line.length === 0 || line.trim().length === 0) {
    throw new Error("Line must not be empty or only white space.");
  }
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `Line is ${line.length} characters, exceeding the ${MAX_LENGTH}-character limit.`,
    );
  }
}

function writeEntry(line: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

function main(): void {
  assertWithinLimit(LINE);
  writeEntry(LINE);
}

main();
