module.exports = function shouldPreserveLinks() {
  if (Boolean(process.env.NODE_PRESERVE_SYMLINKS)) {
    return true;
  }
  const filename = require("./b");
  if (filename.endsWith("b.js")) {
    return true;
  }
  return false;
};
