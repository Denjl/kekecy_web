import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const INPUT_DIR = path.join(PROJECT_ROOT, "public", "assets", "img");

const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png"]);
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 72;

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function toWebpPath(inputPath) {
  const { dir, name } = path.parse(inputPath);
  return path.join(dir, `${name}.webp`);
}

async function optimizeOne(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  if (!SUPPORTED_EXTS.has(ext)) return { skipped: true, reason: "unsupported" };

  const outputPath = toWebpPath(inputPath);
  if (await fileExists(outputPath)) return { skipped: true, reason: "exists" };

  await sharp(inputPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);

  return { skipped: false, outputPath };
}

async function main() {
  console.log(`Optimizing images in: ${INPUT_DIR}`);
  const allFiles = await walk(INPUT_DIR);

  let created = 0;
  let skipped = 0;

  for (const inputPath of allFiles) {
    const ext = path.extname(inputPath).toLowerCase();
    if (!SUPPORTED_EXTS.has(ext)) continue;

    try {
      const result = await optimizeOne(inputPath);
      if (result.skipped) {
        skipped += 1;
      } else {
        created += 1;
        console.log(`+ ${path.relative(PROJECT_ROOT, result.outputPath)}`);
      }
    } catch (err) {
      console.error(`Failed: ${path.relative(PROJECT_ROOT, inputPath)}`);
      throw err;
    }
  }

  console.log(`Done. Created: ${created}, skipped: ${skipped}`);
}

await main();
