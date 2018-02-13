const quake = require("quake-task");
const rollup = require(".");

quake.register(rollup);

quake.add("rollup", rollup("test/main.js", "test/bundle.js"));

quake.start("rollup");
