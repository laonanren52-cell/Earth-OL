import { spawn } from "child_process";
import { request } from "http";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const server = spawn("node", [
  resolve(root, "node_modules", "next", "dist", "bin", "next"),
  "dev",
  "--port",
  "3000",
], {
  cwd: root,
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";
server.stdout.on("data", (d) => { output += d.toString(); });
server.stderr.on("data", (d) => { output += d.toString(); });

const waitForReady = () =>
  new Promise((resolve, reject) => {
    const maxWait = 30000;
    const start = Date.now();
    const check = () => {
      if (output.includes("Ready")) {
        resolve();
      } else if (Date.now() - start > maxWait) {
        reject(new Error("Timeout waiting for server"));
      } else {
        setTimeout(check, 500);
      }
    };
    check();
  });

const fetchPage = () =>
  new Promise((resolve, reject) => {
    const req = request(
      { hostname: "localhost", port: 3000, path: "/", method: "GET" },
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
  console.log("=== SERVER READY ===");
  const page = await fetchPage();
  console.log("Status:", page.status);
  console.log("HTML length:", page.body.length);
  console.log("=== HTML SNIPPET ===");
  console.log(page.body.substring(0, 2000));
  console.log("=== END ===");
} catch (e) {
  console.error("ERROR:", e.message);
  console.error("Output:", output);
} finally {
  server.kill();
  process.exit(0);
}
