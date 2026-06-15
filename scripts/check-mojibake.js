const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const patterns = [
  "\u6EE8", "\u87AB", "\u7489", "\u5A9B", "\u6EE6",
  "\u954E", "\u52EB", "\u5568", "\u6D9F",
  "\u951F\u9FBF",
  "\u25A1",
];
const badLatin = /[\u00C0-\u00FF]/;
const cjk = /[\u4E00-\u9FFF]/;

let found = 0;
const exts = [".ts", ".tsx", ".js"];
const skip = ["node_modules", ".next", ".git", ".tools"];

function scan(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (!skip.includes(e.name)) scan(fp);
    } else if (e.isFile() && exts.includes(path.extname(e.name))) {
      let bytes, text;
      try {
        bytes = fs.readFileSync(fp);
        text = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
      } catch { return; }
      for (const p of patterns) {
        if (text.includes(p)) {
          console.log("MOJIBAKE: " + fp.replace(root + "\\", "") + " contains " + JSON.stringify(p));
          found++;
          break;
        }
      }
      const latinCount = (text.match(badLatin) || []).length;
      const cjkCount = (text.match(cjk) || []).length;
      if (cjkCount > 10 && latinCount > 0 && latinCount / cjkCount > 0.05) {
        console.log("LATIN_DENSITY: " + fp.replace(root + "\\", "") + " latin " + Math.round(latinCount / cjkCount * 100) + "% of cjk");
        found++;
      }
    }
  }
}

scan(root);
if (found === 0) console.log("OK: No mojibake found");
process.exit(found > 0 ? 1 : 0);
