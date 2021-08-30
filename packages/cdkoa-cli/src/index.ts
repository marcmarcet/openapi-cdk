#!/usr/bin/env node

import { exec } from "child_process";

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
    debugger;
    exec(`npx ts-node --prefer-ts-exts ${process.cwd()}/index.ts`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout: ${stdout}`);
    });

  })
  .help()
  .argv;
