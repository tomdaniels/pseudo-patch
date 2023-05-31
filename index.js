const { Command } = require("commander");
const pseudoPatch = require("./lib/pseudo-patch");

const cli = new Command();
const opts = [
  {
    flag: "-s, --spacing <number>",
    desc: "preferred indent spacing size",
    // commander parses all args as strings
    handler: (val) => parseInt(val, 10),
  },
  {
    flag: "-p, --path <string>",
    desc: "path to package.json (if not <projectRoot>/package.json)",
  },
  ...["major", "minor"].map((type) => ({
    flag: `--${type}`,
    desc: `force increment as a ${type} change`,
  })),
];

// register flags
opts.forEach((opt) => cli.option(opt.flag, opt.desc, opt.handler));

cli.parse(process.argv);
pseudoPatch(cli.opts());
