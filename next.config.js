const fs = require("fs");
const path = require("path");

function copyOverwolfFiles(dir, outDir) {
  const files = fs.readdirSync(path.join(dir, "overwolf"));
  files.forEach(file => {
    fs.copyFileSync(path.join(dir, "overwolf", file), path.join(outDir, file));
  });
}

module.exports = {
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
    if (!dev) {
      copyOverwolfFiles(dir, outDir);
    }
    return defaultPathMap;
  }
};
