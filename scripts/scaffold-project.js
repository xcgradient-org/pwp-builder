const fs = require("fs");
const path = require("path");
const readline = require("readline/promises");

const rootDir = path.resolve(__dirname, "..");
const projectsDir = path.join(rootDir, "projects");

function normalizeName(rawName) {
  return String(rawName || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleFromName(projectName) {
  return projectName
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function projectExists(projectName) {
  return fs.existsSync(path.join(projectsDir, projectName));
}

async function requestUniqueName(initialName) {
  let projectName = normalizeName(initialName);

  if (!projectName) {
    throw new Error("Project name is required. Example: make class2");
  }

  while (projectExists(projectName)) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      throw new Error(`Project "${projectName}" already exists. Run make <new-name>.`);
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await rl.question(`Project "${projectName}" already exists. Enter a new project name: `);
    rl.close();

    const nextName = normalizeName(answer);
    if (!nextName) {
      console.error("Project name cannot be empty.");
      continue;
    }

    projectName = nextName;
  }

  return projectName;
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function writeExecutable(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
  fs.chmodSync(filePath, 0o755);
}

function scaffoldFiles(projectName) {
  const title = titleFromName(projectName);
  const projectDir = path.join(projectsDir, projectName);
  const assetsDir = path.join(projectDir, "assets");
  const outputDir = path.join(projectDir, "output");
  const slidesDir = path.join(outputDir, "slides");

  fs.mkdirSync(assetsDir, { recursive: true });
  fs.mkdirSync(slidesDir, { recursive: true });

  writeFile(
    path.join(projectDir, "data.js"),
    `module.exports = {
  id: "${projectName}",
  title: "${title}",
  subtitle: "Replace this subtitle",
  body: "Replace this placeholder content with your first real slide.",
};
`
  );

  writeFile(
    path.join(projectDir, "deck.js"),
    `const data = require("./data");

module.exports = {
  id: data.id,
  title: data.title,
  build(pres, { theme, contentSlide, slideTitle }) {
    const slide = contentSlide();

    slideTitle(slide, data.title.toUpperCase());
    slide.addText(data.subtitle, {
      x: 0.6,
      y: 1.35,
      w: 8.8,
      h: 0.4,
      fontFace: theme.fonts.body,
      fontSize: 16,
      color: theme.colors.gray,
      bold: true,
      margin: 0,
    });
    slide.addText(data.body, {
      x: 0.6,
      y: 2.0,
      w: 8.8,
      h: 1.4,
      fontFace: theme.fonts.body,
      fontSize: 18,
      color: theme.colors.black,
      margin: 0,
    });
  },
};
`
  );

  writeExecutable(
    path.join(projectDir, "update.sh"),
    `#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
PROJECT_NAME="$(basename "$PROJECT_DIR")"
ROOT_DIR="$(cd "$PROJECT_DIR/../.." && pwd)"
OUTPUT_DIR="$PROJECT_DIR/output"
PPTX_FILE="$OUTPUT_DIR/$PROJECT_NAME.pptx"
PDF_FILE="$OUTPUT_DIR/$PROJECT_NAME.pdf"
SLIDES_DIR="$OUTPUT_DIR/slides"
PROFILE_DIR="$OUTPUT_DIR/.lo-profile"

mkdir -p "$OUTPUT_DIR" "$SLIDES_DIR" "$PROFILE_DIR"

node "$ROOT_DIR/build.js" "$PROJECT_NAME"

if ! command -v soffice >/dev/null 2>&1; then
  echo "Missing dependency: soffice"
  exit 1
fi

if ! command -v pdftoppm >/dev/null 2>&1; then
  echo "Missing dependency: pdftoppm"
  exit 1
fi

rm -f "$PDF_FILE"
soffice --headless -env:UserInstallation="file://$PROFILE_DIR" --convert-to pdf --outdir "$OUTPUT_DIR" "$PPTX_FILE"

rm -f "$SLIDES_DIR"/slide-*.jpg
pdftoppm -jpeg -r 150 "$PDF_FILE" "$SLIDES_DIR/slide"

echo "✅ Updated $PPTX_FILE"
echo "✅ Updated $PDF_FILE"
echo "✅ Updated $SLIDES_DIR"
`
  );

  writeFile(path.join(assetsDir, ".gitkeep"), "");
  writeFile(path.join(outputDir, ".gitkeep"), "");
  writeFile(path.join(slidesDir, ".gitkeep"), "");

  return projectDir;
}

async function main() {
  const requestedName = process.argv[2];
  const projectName = await requestUniqueName(requestedName);
  const projectDir = scaffoldFiles(projectName);
  console.log(`✅ Created ${path.relative(rootDir, projectDir)}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
