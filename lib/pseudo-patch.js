const fs = require('fs');
const path = require('path');

// new folder absolute path 
const setPath = (filepath) =>
  path.join(process.cwd(), filepath || './package.json');

const flow = (...fns) => (arg) => fns.reduce((v, f) => f(v), arg);

const splitParts = string => string.split('.'); // 'x.x.x' into ['x','x','x']
const getLast = array => array.pop();
const toNumber = str => parseInt(str, 10);
const bump = number => number + 1;

const toNumbers = array => array.map(toNumber);
const dropLast = array => array.slice(0, -1);
const join = array => array.join('.');

// increase the last "number" from the string "x.x.x"
// => number (x + 1)
const pseudoPatch = flow(
  splitParts,
  getLast,
  toNumber,
  bump
);

// removes the last "number" from the string "x.x.x"
// => string ('x.x')
const strip = flow(
  splitParts,
  toNumbers,
  dropLast,
  join,
);

module.exports = (opts) => {
  const { spacing = 2, path: filename } = opts; 
  const packageJsonPath = setPath(filename);

  // snapshot
  const pkg = require(packageJsonPath);
  const { version: pkgVersion } = pkg; // current version
  
  const version = `${strip(pkgVersion)}.${pseudoPatch(pkgVersion)}`; // === 'x.x' + '.x'
  const packageJson = JSON.stringify({ ...pkg, version }, null, spacing);

  return fs.writeFileSync(packageJsonPath, packageJson, (err) => {
      if (err) throw `on write: ${err}`;
  });
};
