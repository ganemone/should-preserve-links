const os = require('os');
const fs = require('fs');
const path = require('path');

const pathToA = path.join(__dirname, 'a.js');
const pathToB = path.join(__dirname, 'b.js');

module.exports = function shouldPreserveLinks() {
  if (Boolean(process.env.NODE_PRESERVE_SYMLINKS)) {
    return true;
  }
  if (!fs.existsSync(pathToB)) {
    try {
      fs.symlinkSync(pathToA, pathToB);
    } catch(e) {}
  }
  const filename = require("./b");
  if (filename.endsWith("b.js")) {
    return true;
  }
  return false;
};
