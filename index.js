const { Command } = require('commander');
const pseudoPatch = require('./lib/pseudo-patch');

const cli = new Command();
const opts = [
  {
    flags: '-s, --spacing <type>',
    desc: 'preferred indent spacing size',
    // this handler is not required for all opts
    // commander parses all args as strings
    handler: (val) => parseInt(val, 10)
  },
  // extend me..
];
opts.forEach((opt) => cli.option(
  opt.flags,
  opt.desc,
  opt.handler,
));

cli.parse(process.argv);
pseudoPatch(cli.opts());
