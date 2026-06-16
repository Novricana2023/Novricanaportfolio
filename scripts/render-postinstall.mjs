import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteBin = path.join(__dirname, "..", "node_modules", "vite", "bin", "vite.js");

// Render often runs only `pnpm install` as the build command on Static Sites.
// When RENDER=true, build the frontend so dist/public exists before publish.
if (process.env.RENDER === "true") {
  console.log("[render-postinstall] Building static site into dist/public...");
  execSync(`node "${viteBin}" build`, { stdio: "inherit" });
}
