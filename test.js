const exec = require("child_process").execSync;
const assert = require("assert");

assert.equal(exec("node usage.js").toString(), "false\n");
assert.equal(
  exec("NODE_PRESERVE_SYMLINKS=1 node usage.js").toString(),
  "true\n"
);
assert.equal(exec("node --preserve-symlinks usage.js").toString(), "true\n");
