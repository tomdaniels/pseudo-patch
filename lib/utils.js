function incrementVersion(v, type = {}) {
  const version = v.split(".").map(Number);
  const index = type.major ? 0 : type.minor ? 1 : 2;

  version.splice(index, 1, version[index] + 1);
  return version.map(String).join(".");
}

module.exports = { incrementVersion };
