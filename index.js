const { Command } = require('commander');
const pseudoPatch = require('./lib/pseudo-patch');

const cli = new Command();
const opts = [
  {
    flag: '-s, --spacing <number>',
    desc: 'preferred indent spacing size',
    // commander parses all args as strings
    handler: (val) => parseInt(val, 10)
  },
  {
    flag: '-p, --path <string>',
    desc: 'path to package.json (if not <projectRoot>/package.json)'
  },
  {
    flag: '-t, --type <string>',
    desc: "version bump type: 'major', 'minor' or 'patch' which is the default"
  }
];

// register flags
opts.forEach((opt) => cli.option(
  opt.flag,
  opt.desc,
  opt.handler,
));

cli.parse(process.argv);
pseudoPatch(cli.opts());
