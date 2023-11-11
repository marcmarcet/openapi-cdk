#!/usr/bin/env node


// compile from file
import {compileFromFile} from "json-schema-to-typescript";
import fs from "fs";



compileFromFile('schema.json', { }).then(ts => fs.writeFileSync('schema.d.ts', ts))

