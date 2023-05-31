const DELIMITER = "."

const flow = (...fns) => (arg) =>
    fns.reduce((v, f) => f(v), arg);

// increase the last "number" from the string "x.x.x"
// => number (x + 1)
const increment = flow(
  (str) => str.split(DELIMITER),
  (arr) => arr.pop(),
  (str) => parseInt(str, 10),
  (n) => (n += 1)
);

// removes the last "number" from the string "x.x.x"
// => string ('x.x')
const strip = flow(
  (str) => str.split(DELIMITER),
  (arr) => arr.map(Number),
  (arr) => arr.slice(0, -1),
  (arr) => arr.join(".")
);

module.exports = { strip, increment };
