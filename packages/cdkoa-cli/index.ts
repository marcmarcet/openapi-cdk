#!/usr/bin/env node

require('yargs')
  .scriptName("cdkoa")
  .usage('$0 <cmd> [args]')
  .command('synth [name]', 'welcome ter yargs!', (yargs: any) => {
    yargs.positional('name', {
      type: 'string',
      default: 'Cambi',
      describe: 'the name to say hello to'
    })
  }, function (argv: any) {

    console.log('hello', argv.name, 'welcome to yargs!')
  })
  .help()
  .argv;
