"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdkoa_1 = require("cdkoa");
var app = new cdkoa_1.App({});
var x = new cdkoa_1.OpenApiV3.Document(app, 'my-api', {
    openapi: '3.0.0',
    info: null,
    paths: null
});
app.synth();
