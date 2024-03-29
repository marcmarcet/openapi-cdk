import { App, OpenApiV3 } from 'cdkoa';
import description from '../lib/info/description';
import pet from '../lib/paths/pet';
import petFindByStatus from '../lib/paths/pet-findByStatus';
import petFindByTags from '../lib/paths/pet-findByTags';
import petPetId from '../lib/paths/pet-petId';
import {Info, Paths} from "cdkoa/lib/openapi-v3";

const app = new App({});

new OpenApiV3.Document(app, 'my-api', {
  info: new Info({
    title: "Swagger Petstore 2 - OpenAPI 3.0",
    description: description,
    version: '1.0.6',
    termsOfService: 'http://swagger.io/terms/'
  }),
  paths: new Paths({
    '/pets': pet,
    '/pet/{petId}': petPetId,
    '/pet/findByStatus': petFindByStatus,
    '/pet/findByTags': petFindByTags,
  })
});

app.synth();
