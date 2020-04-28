module.exports = function shouldPreserveLinks() {
  const filename = require("./b");
  if (filename.endsWith("b.js")) {
    return true;
  }
  return false;
};
