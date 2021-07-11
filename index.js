const { Command } = require('commander');
const pseudoPatch = require('./lib/pseudo-patch');

const cli = new Command();
const opts = [
  {
    flag: '-s, --spacing <type>',
    desc: 'preferred indent spacing size',
    // handler will not be required for all opts,
    // but commander parses all args as strings
    handler: (val) => parseInt(val, 10)
  },
];

// register flags
opts.forEach((opt) => cli.option(
  opt.flag,
  opt.desc,
  opt.handler,
));

cli.parse(process.argv);
pseudoPatch(cli.opts());
