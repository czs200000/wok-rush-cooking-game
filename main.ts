// Wok Rush — 小厨神快线
// Entry for make.fun bounty "Make the best cooking game"
// Run with Node 22.18+ (tested on Node v24.22.1):
//   node main.ts
// It copies game/ to out/ and writes a build manifest. No network requests.
import { cpSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root: string = dirname(fileURLToPath(import.meta.url));
const src: string = join(root, "game");
const out: string = join(root, "out");

if (!existsSync(src)) {
  console.error("game/ not found next to main.ts");
  process.exit(1);
}
mkdirSync(out, { recursive: true });
cpSync(src, out, { recursive: true });
const manifest: string = JSON.stringify(
  { name: "wok-rush", title: "小厨神快线 · Wok Rush", builtAt: new Date().toISOString(), files: ["index.html"] },
  null,
  2
);
writeFileSync(join(out, "manifest.json"), manifest + "\n");
console.log("Built game to " + out);
console.log("Open out/index.html in a desktop browser to play. No network requests.");
