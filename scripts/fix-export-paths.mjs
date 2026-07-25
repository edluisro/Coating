import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const exportDir = path.resolve("out");
const from = /(["'])\/_next\//g;
const to = "$1/landing-next/_next/";

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(fullPath) : fullPath;
    }),
  );

  return files.flat();
}

const files = await listFiles(exportDir);

await Promise.all(
  files
    .filter((file) => file.endsWith(".html") || file.endsWith(".txt"))
    .map(async (file) => {
      const original = await readFile(file, "utf8");
      const updated = original.replace(from, to);

      if (updated !== original) {
        await writeFile(file, updated);
      }
    }),
);
