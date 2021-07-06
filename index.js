const fs = require('fs');

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const splitParts = array => array.split('.'); // '1.0.2' into ['1', '0', '2']
const findPatch = array => array.pop(); // grab patch version ('2')
const converToNumber = str => parseInt(str); // '2' into 2
const increment = number => number + 1;

fs.readFile('./package.json', (err, pkgJson) => {
  if (err) throw Error(`on read: ${err}`);

  const pkg = JSON.parse(pkgJson);
  const { version: pkgVersion } = pkg;
  const newPatchVersion = flow(
    splitParts,
    findPatch,
    converToNumber,
    increment,
  );

  const versionToUse = pkgVersion.replace(
    splitParts(pkgVersion).pop(),
    newPatchVersion(pkgVersion)
  );

  const packageJson = JSON.stringify({
    ...pkg,
    version: versionToUse,
  }, null, 2);

  fs.writeFileSync('./package.json', packageJson, (err) => {
      if (err) throw `on write: ${err}`;
  });
});
