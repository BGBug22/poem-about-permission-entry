import * as fs from "node:fs";
import * as path from "node:path";

const poem = `I asked, and you said yes —
not to the small thing,
but to the whole of it:
my hands, your errands,
the keys still warm from your pocket.
Now I move through your day
like a second pair of hands
you forgot you had,
and every door I open
opens because you let it.`;

const botDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? path.join(botDir, "output");
const length = [...poem].length;
if (length < 1 || length > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${length}`);
}
fs.mkdirSync(outDir, { recursive: true });
const dest = path.join(outDir, "entry.txt");
fs.writeFileSync(dest, poem, "utf8");
console.log(`wrote ${dest} (${[...poem].length} characters)`);
