const fs = require("fs");
const path = require("path");
const readline = require("readline/promises");

const rootDir = path.resolve(__dirname, "..");
const projectsDir = path.join(rootDir, "projects");
const logoPath = path.join(rootDir, "brand-assets", "logo.png");

function normalizeName(rawName) {
  return String(rawName || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseRequestedProject(args) {
  const values = args.filter(Boolean);

  if (values[0] === "--project") {
    if (values.length !== 3) {
      throw new Error("Usage: make PROJECT=oriol demo or make oriol demo");
    }

    return {
      namespace: normalizeName(values[1]),
      projectName: normalizeName(values[2]),
    };
  }

  if (values.length === 2) {
    return {
      namespace: normalizeName(values[0]),
      projectName: normalizeName(values[1]),
    };
  }

  if (values.length === 1) {
    return {
      namespace: "",
      projectName: normalizeName(values[0]),
    };
  }

  throw new Error("Usage: make <name> | make PROJECT=oriol <name> | make oriol <name>");
}

function projectKeyFromParts(namespace, projectName) {
  return namespace ? `${namespace}/${projectName}` : projectName;
}

function titleFromName(projectName) {
  return projectName
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function projectExists(projectName) {
  return fs.existsSync(path.join(projectsDir, ...String(projectName).split("/")));
}

async function requestUniqueName(initialProject) {
  let namespace = initialProject.namespace;
  let projectName = initialProject.projectName;

  if (!projectName) {
    throw new Error("Project name is required. Example: make class2");
  }

  while (projectExists(projectKeyFromParts(namespace, projectName))) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      throw new Error(`Project "${projectKeyFromParts(namespace, projectName)}" already exists. Run make <new-name>.`);
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await rl.question(
      `Project "${projectKeyFromParts(namespace, projectName)}" already exists. Enter a new project name: `
    );
    rl.close();

    const nextName = normalizeName(answer);
    if (!nextName) {
      console.error("Project name cannot be empty.");
      continue;
    }

    projectName = nextName;
  }

  return {
    namespace,
    projectName,
    projectKey: projectKeyFromParts(namespace, projectName),
  };
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function writeExecutable(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
  fs.chmodSync(filePath, 0o755);
}

function scaffoldFiles(projectKey, projectName) {
  const title = titleFromName(projectName);
  const projectDir = path.join(projectsDir, ...projectKey.split("/"));
  const assetsDir = path.join(projectDir, "assets");
  const outputDir = path.join(projectDir, "output");
  const slidesDir = path.join(outputDir, "slides");
  const rootFromProject = path.relative(projectDir, rootDir) || ".";

  fs.mkdirSync(assetsDir, { recursive: true });
  fs.mkdirSync(slidesDir, { recursive: true });

  if (fs.existsSync(logoPath)) {
    fs.copyFileSync(logoPath, path.join(assetsDir, "logo.png"));
  }

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
PROJECT_KEY="${projectKey}"
PROJECT_NAME="${projectName}"
ROOT_DIR="$(cd "$PROJECT_DIR/${rootFromProject}" && pwd)"
OUTPUT_DIR="$PROJECT_DIR/output"
PPTX_FILE="$OUTPUT_DIR/$PROJECT_NAME.pptx"
PDF_FILE="$OUTPUT_DIR/$PROJECT_NAME.pdf"
SLIDES_DIR="$OUTPUT_DIR/slides"
PROFILE_DIR="$OUTPUT_DIR/.lo-profile"

mkdir -p "$OUTPUT_DIR" "$SLIDES_DIR" "$PROFILE_DIR"

node "$ROOT_DIR/build.js" "$PROJECT_KEY"

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
  const requestedProject = parseRequestedProject(process.argv.slice(2));
  const project = await requestUniqueName(requestedProject);
  const projectDir = scaffoldFiles(project.projectKey, project.projectName);
  console.log(`✅ Created ${path.relative(rootDir, projectDir)}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
