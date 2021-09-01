#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const server_1 = __importDefault(require("./lib/webpack-dev-server/server"));
require('yargs')
    .scriptName("cdkoa")
    .usage('$0 <cmd> [args]')
    .command('synth', 'welcome ter yargs!', (yargs) => {
}, function (argv) {
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
    .command('preview', 'welcome ter yargs!', (yargs) => {
}, function (argv) {
    server_1.default.start();
})
    .help()
    .argv;
