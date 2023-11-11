#!/usr/bin/env node

import { exec } from "child_process";
import server from "./lib/webpack-dev-server/server";


require('yargs')
  .scriptName("cdkoa")
  .usage('$0 <cmd> [args]')
  .command(
    'synth',
    'welcome ter yargs!',
    (yargs: any) => {
    },
    async function (argv: any) {
      debugger;
      let app = await import(`${process.cwd()}/../demo/bin/app.ts`);
      //app();
      debugger;


      // exec(`npx ts-node --prefer-ts-exts ${process.cwd()}/bin/app.ts`, (error, stdout, stderr) => {
      //   if (error) {
      //     console.log(`error: ${error.message}`);
      //     return;
      //   }
      //
      //   if (stderr) {
      //     console.log(`stderr: ${stderr}`);
      //     return;
      //   }
      //
      //   console.log(`stdout: ${stdout}`);
      // });
    })
  .command(
    'preview',
    'welcome ter yargs!',
    (yargs: any) => {
    },
    function (argv: any) {
      server.start();
    })
  .help()
  .argv;
