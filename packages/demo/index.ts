import { App, OpenApiV3 } from 'cdkoa';
import { Info, Paths } from '../cdkoa/lib/openapi-v3';

var app = new App({});

new OpenApiV3.Document(app, 'my-api', {
  info: new Info({
    title: "Jobs API",
    summary: "This is the best api ever",
    description: "A slightly longer version of the description",
    version: '1.0.0'
  }),
  paths: new Paths({
    '/jobs': {

    }
  })
});

app.synth();
