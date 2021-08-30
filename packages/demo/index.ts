import { App, OpenApiV3 } from 'cdkoa';

var app = new App({});

new OpenApiV3.Document(app, 'my-api', {
  openapi: 'a',
  info: null!,
  paths: null!
});

app.synth();
