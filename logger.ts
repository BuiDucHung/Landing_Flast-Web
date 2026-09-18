
function formatDate(date: Date) {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    `${date.getFullYear()}-` +
    `${pad(date.getMonth() + 1)}-` +
    `${pad(date.getDate())} ` +
    `${pad(date.getHours())}:` +
    `${pad(date.getMinutes())}:` +
    `${pad(date.getSeconds())}`
  );
}

const serializeArgs = (args: any[]) => args.map((arg) => {
  if (typeof arg === "string") return arg;
  if (arg === null || arg === undefined) return String(arg);
  try {
    return JSON.stringify(arg);
  } catch {
    return String(arg);
  }
}).join(" ");

function log(level: "INFO" | "WARN" | "ERROR", ...args: any[]) {
  const timestamp = formatDate(new Date());
  const message = serializeArgs(args);
  console.log(`[${level}] ${timestamp} - ${message}`);
}

export const logger = {
  info: (...args: any[]) => log("INFO", ...args),
  warn: (...args: any[]) => log("WARN", ...args),
  error: (...args: any[]) => log("ERROR", ...args)
};

export default logger;
