const rp = require("rollup");

var quake = null;

function rollup(input, output, options = {input: {}, output: {}}) {
  if (options.output.sourcemap) throw new Error("quake-rollup does not support sourcemaps");
  if (!quake) throw new Error("rollup requires registration. Call quake.register(rollup)");
  options.input.input = input;
  options.output.file = output;
  options.output.format = options.output.format || "iife";
  console.log(input, output);
  return [quake.create(output, false), quake.name(_ => rp.rollup(options.input).then(v => v.generate(options.output)).then(v => v.code), "Rollup from " + input), quake.dest(output)];
}

rollup.register = q => quake = q, true;

module.exports = rollup;
