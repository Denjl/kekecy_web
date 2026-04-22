import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const htmlPath = path.join(distDir, "index.html");
const serverEntryPath = path.join(distDir, "server", "entry-server.js");

const html = await readFile(htmlPath, "utf8");
const { render } = await import(pathToFileURL(serverEntryPath).href);
const appHtml = render();

const prerenderedHtml = html.replace(
  /<div id="root">\s*<\/div>/,
  `<div id="root">${appHtml}</div>`,
);

await writeFile(htmlPath, prerenderedHtml, "utf8");