import { App, OpenApiV3 } from 'cdkoa';

var app = new App({});

var x = new OpenApiV3.Document(app, 'my-api', {
  openapi: '3.0.0',
  info: null!,
  paths: null!
});

app.synth();
