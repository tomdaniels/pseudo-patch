const fs = require('fs');
const path = require('path');
// new folder absolute path
const RELATIVE_PKG_PATH = './package.json';
const packageJsonPath = path.join(process.cwd(), RELATIVE_PKG_PATH);

// current packageJson & version number
const pkg = require(packageJsonPath);
const { version: pkgVersion } = pkg;

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const dropLast = array => array.slice(0, -1);
const join = array => array.join('.');

const splitParts = string => string.split('.');
const toNumbers = array => array.map((string) => Number(string));
const getLast = array => array.pop();
const toNumber = number => parseInt(number);
const bump = number => number + 1;

// removes the last "number" from the string "x.x.x"
// => string ('x.x')
const strip = flow(
  splitParts,
  toNumbers,
  dropLast,
  join,
);

// increase the last "number" from the string "x.x.x"
// => number x + 1
const pseudoPatch = flow(
  splitParts,
  getLast,
  toNumber,
  bump
);

const version = `${strip(pkgVersion)}.${pseudoPatch(pkgVersion)}`; // === 'x.x' + '.x'
const packageJson = JSON.stringify({ ...pkg, version }, null, 2);

fs.writeFileSync(packageJsonPath, packageJson, (err) => {
    if (err) throw `on write: ${err}`;
});
