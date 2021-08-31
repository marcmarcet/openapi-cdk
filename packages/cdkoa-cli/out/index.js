#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
require('yargs')
    .scriptName("cdkoa")
    .usage('$0 <cmd> [args]')
    .command('synth [name]', 'welcome ter yargs!', (yargs) => {
    yargs.positional('name', {
        type: 'string',
        default: 'Cambi',
        describe: 'the name to say hello to'
    });
}, function (argv) {
    debugger;
    (0, child_process_1.exec)(`npx ts-node --prefer-ts-exts ${process.cwd()}/bin/app.ts`, (error, stdout, stderr) => {
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
