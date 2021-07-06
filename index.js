const fs = require('fs');
const path = require('path');

// new folder absolute path
const RELATIVE_PKG_PATH = './package.json';
const packageJsonPath = path.join(process.cwd(), RELATIVE_PKG_PATH);

// current packageJson & version number
const pkg = require(packageJsonPath);
const { version: pkgVersion } = pkg;

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const splitParts = string => string.split('.'); // '1.0.2' into ['1', '0', '2']
const toNumbers = array => array.map((item) => parseInt(item)); // ['1', '0', '2'] into [1 , 2, 3]
const findPatch = array => array.pop(); // '2' into 2
const increment = number => number + 1;
const toString = number => number.toString();

const getPatchVersion = flow(
  splitParts,
  toNumbers,
  findPatch,
);

const newPatchVersion = flow(
  getPatchVersion,
  increment,
  toString,
);

// TODO each run of the scrip updates the previous item in the array :thinking:
const versionToUse = pkgVersion.replace(
  getPatchVersion(pkgVersion),
  newPatchVersion(pkgVersion)
);
console.log(versionToUse);

const packageJson = JSON.stringify({
  ...pkg,
  version: versionToUse,
}, null, 2);

fs.writeFileSync(packageJsonPath, packageJson, (err) => {
    if (err) throw `on write: ${err}`;
});
