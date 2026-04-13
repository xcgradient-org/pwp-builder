const path = require("path");

const { buildProjectByName } = require("./shared/pptx");

async function main() {
  const projectName = process.argv[2];

  if (!projectName) {
    console.error("Usage: node build.js <project-name>");
    process.exit(1);
  }

  const outFile = await buildProjectByName(projectName);
  console.log(`✅ ${path.relative(process.cwd(), outFile)} written`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  main,
  buildProjectByName,
};
