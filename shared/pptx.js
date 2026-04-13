const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");

const theme = require("./theme");
const { createHelpers } = require("./helpers");

const rootDir = path.resolve(__dirname, "..");

function getProjectDir(projectName) {
  const parts = String(projectName || "")
    .split("/")
    .filter(Boolean);
  return path.join(rootDir, "projects", ...parts);
}

function loadProjectDeck(projectName) {
  const projectDir = getProjectDir(projectName);
  const deckPath = path.join(projectDir, "deck.js");

  if (!fs.existsSync(projectDir)) {
    throw new Error(`Project "${projectName}" does not exist in ${path.join(rootDir, "projects")}.`);
  }
  if (!fs.existsSync(deckPath)) {
    throw new Error(`Project "${projectName}" is missing ${deckPath}.`);
  }

  delete require.cache[require.resolve(deckPath)];
  const deck = require(deckPath);
  if (!deck || typeof deck.build !== "function") {
    throw new Error(`Project "${projectName}" must export an object with a build(pres, api) function.`);
  }

  return { deck, projectDir };
}

function createPresentation(deck) {
  const pres = new pptxgen();
  pres.layout = theme.layout;
  pres.title = deck.title || deck.id || "Untitled Presentation";
  pres.subject = "PptxGenJS Presentation";
  pres.author = deck.author || "pwp-builder";
  return pres;
}

async function buildProjectByName(projectName) {
  const { deck, projectDir } = loadProjectDeck(projectName);
  const outputDir = path.join(projectDir, "output");
  const slidesDir = path.join(outputDir, "slides");
  const projectId = path.basename(projectDir);

  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(slidesDir, { recursive: true });

  const pres = createPresentation(deck);
  const helpers = createHelpers(pres, theme);
  const api = {
    theme,
    projectDir,
    assetsDir: path.join(projectDir, "assets"),
    outputDir,
    ...helpers,
  };

  await deck.build(pres, api);

  const outFile = path.join(outputDir, `${projectId}.pptx`);
  await pres.writeFile({ fileName: outFile });
  return outFile;
}

module.exports = {
  buildProjectByName,
  createPresentation,
  getProjectDir,
};
