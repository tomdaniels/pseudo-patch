const { Command } = require('commander');
const pseudoPatch = require('./lib/pseudo-patch');

const cli = new Command();
cli.option(
  '-s, --spacing <type>',
  'preferred indent spacing size',
);

cli.parse(process.argv);
pseudoPatch(cli.opts());
