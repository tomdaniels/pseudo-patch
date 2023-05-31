const fs = require("fs");
const path = require("path");

const { increment, strip } = require('./utils')

// new folder absolute path
function setPath(filepath) {
  return path.join(process.cwd(), filepath || "./package.json");
}

module.exports = (opts) => {
  const { spacing = 2, path: filename } = opts;
  const packageJsonPath = setPath(filename);

  // snapshot
  const pkg = require(packageJsonPath);
  const { version: pkgVersion } = pkg; // current version

  const version = `${strip(pkgVersion)}.${increment(pkgVersion)}`; // === 'x.x' + '.x'
  const packageJson = JSON.stringify({ ...pkg, version }, null, spacing);

  return fs.writeFileSync(packageJsonPath, packageJson, (err) => {
    if (err) throw `on write: ${err}`;
  });
};
