import { spawn } from "child_process";
import { request } from "http";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const server = spawn("node", [
  resolve(root, "node_modules", "next", "dist", "bin", "next"),
  "dev",
  "--port", "3002",
], { cwd: root, stdio: ["ignore", "pipe", "pipe"] });

let output = "";
server.stdout.on("data", (d) => { output += d.toString(); });
server.stderr.on("data", (d) => { output += d.toString(); });

const waitForReady = () => new Promise((resolve, reject) => {
  const maxWait = 30000;
  const start = Date.now();
  const check = () => {
    if (output.includes("Ready")) resolve();
    else if (Date.now() - start > maxWait) reject(new Error("Timeout"));
    else setTimeout(check, 500);
  };
  check();
});

const fetchPage = (path) => new Promise((resolve, reject) => {
  const req = request(
    { hostname: "localhost", port: 3002, path, method: "GET" },
    (res) => {
      let body = "";
      res.on("data", (c) => (body += c));
      res.on("end", () => resolve({ status: res.statusCode, body }));
    }
  );
  req.on("error", reject);
  req.end();
});

try {
  await waitForReady();
  console.log("✓ Server ready");

  const routes = ["/", "/records", "/achievements", "/profile"];
  for (const route of routes) {
    const page = await fetchPage(route);
    const ok = page.status === 200;
    const hasContent = page.body.includes("人生打卡") || page.body.includes("成就");
    console.log(`[${ok ? "OK" : "FAIL"}] ${route} -> ${page.status} (${page.body.length} bytes, content: ${hasContent})`);
  }
} catch (e) {
  console.error("ERROR:", e.message);
} finally {
  server.kill();
  process.exit(0);
}
