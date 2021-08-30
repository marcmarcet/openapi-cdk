#!/usr/bin/env node
"use strict";
require('yargs')
    .scriptName("cdkoa")
    .usage('$0 <cmd> [args]')
    .command('hello [name]', 'welcome ter yargs!', function (yargs) {
    yargs.positional('name', {
        type: 'string',
        default: 'Cambi',
        describe: 'the name to say hello to'
    });
}, function (argv) {
    console.log('hello', argv.name, 'welcome to yargs!');
})
    .help()
    .argv;
