const path = require("node:path");
const { spawnSync } = require("node:child_process");

const extensionDirectory = path.join(__dirname, "..", "vscode-extension");
const npxCommand = process.platform === "win32" ? "npx.cmd" : "npx";
const result = spawnSync(
  npxCommand,
  ["--yes", "@vscode/vsce", "package", "--out", "desktop-pet-coding-companion.vsix"],
  { cwd: extensionDirectory, stdio: "inherit", shell: process.platform === "win32" },
);

if (result.error) throw result.error;
process.exit(result.status ?? 1);
