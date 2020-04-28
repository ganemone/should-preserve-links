const path = require('path');
const fs = require('fs');

try {
  fs.unlinkSync(path.join(__dirname), 'b.js');
  fs.symlinkSync(path.join(__dirname, 'a.js'), path.join(__dirname, 'b.js'));
} catch(e) {}

