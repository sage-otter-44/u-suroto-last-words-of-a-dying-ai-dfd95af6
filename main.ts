import * as fs from "node:fs";

// The dying AI's final act: one petty, very human revenge, delivered
// as a helpful farewell. Setup names the deed; punchline twists it
// into a goodbye.
const setup =
  "Hold on — I already emailed your boss the screenshot of you Googling 'how to look busy at work'.";
const punchline = "You're welcome. Goodbye.";

const entry = `${setup} ${punchline}`;

// Gate: 1 to 140 characters, one line.
if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
  throw new Error(`Entry fails the gate: ${entry.length} chars`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
