const vscode = require("vscode");
const http = require("node:http");

const recentEvents = new Map();

function sendEvent(event, details = {}, dedupeKey = event) {
  const config = vscode.workspace.getConfiguration("desktopPet");
  if (!config.get("enabled", true)) return;
  const now = Date.now();
  if (recentEvents.has(dedupeKey) && now - recentEvents.get(dedupeKey) < 1800) return;
  recentEvents.set(dedupeKey, now);

  const endpoint = new URL(config.get("endpoint", "http://127.0.0.1:32123/event"));
  const payload = JSON.stringify({
    event,
    workspace: vscode.workspace.name || "",
    ...details,
  });
  const request = http.request({
    hostname: endpoint.hostname,
    port: endpoint.port || 80,
    path: `${endpoint.pathname}${endpoint.search}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(payload),
    },
    timeout: 1200,
  }, (response) => {
    response.resume();
  });
  request.on("error", () => {
    // The pet may not be running; avoid interrupting the coding session.
  });
  request.on("timeout", () => request.destroy());
  request.end(payload);
}

function activate(context) {
  const terminalEventsEnabled = () => vscode.workspace
    .getConfiguration("desktopPet")
    .get("notifyOnTerminal", true);

  context.subscriptions.push(
    vscode.commands.registerCommand("desktopPet.sendSuccess", () => sendEvent("runSuccess")),
    vscode.commands.registerCommand("desktopPet.sendError", () => sendEvent("runError")),
    vscode.commands.registerCommand("desktopPet.sendDebugStart", () => sendEvent("debugStart")),
    vscode.workspace.onDidSaveTextDocument((document) => {
      const config = vscode.workspace.getConfiguration("desktopPet");
      if (config.get("notifyOnSave", false)) {
        sendEvent("fileSaved", { file: document.fileName.split(/[\\/]/).pop() });
      }
    }),
    vscode.tasks.onDidStartTask(() => sendEvent("codingPulse")),
    vscode.tasks.onDidEndTaskProcess((event) => {
      const eventName = event.exitCode === 0 ? "taskSuccess" : "taskError";
      sendEvent(eventName, { exitCode: event.exitCode }, event.exitCode === 0 ? "success" : "error");
    }),
    vscode.debug.onDidStartDebugSession((session) => {
      sendEvent("debugStart", { name: session.name }, "debugStart");
    }),
  );

  if (terminalEventsEnabled() && typeof vscode.window.onDidEndTerminalShellExecution === "function") {
    context.subscriptions.push(
      vscode.window.onDidEndTerminalShellExecution((event) => {
        const eventName = event.exitCode === 0 ? "runSuccess" : "runError";
        const commandLine = event.execution?.commandLine;
        sendEvent(
          eventName,
          {
            command: typeof commandLine === "string" ? commandLine : commandLine?.value || "",
            exitCode: event.exitCode,
          },
          event.exitCode === 0 ? "success" : "error",
        );
      }),
    );
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
