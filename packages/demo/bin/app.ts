import { App, OpenApiV3 } from 'cdkoa';
import { Info, Operation, PathItem, Paths } from '../../cdkoa/lib/openapi-v3';
import description from '../lib/info/description';

var app = new App({});

new OpenApiV3.Document(app, 'my-api', {
  info: new Info({
    title: "Swagger Petstore - OpenAPI 3.0",
    description: description,
    version: '1.0.6',
    termsOfService: 'http://swagger.io/terms/'
  }),
  paths: new Paths({
    '/pet': new PathItem({
      summary: 'Pet endpoint',
      description: 'Pet endpoint',
      post: new Operation({
        tags: ['pet'],
        summary: 'Add a new pet to the store',
        description: 'Add a new pet to the store',
        operationId: 'addPet',
        deprecated: false,
      }),
      put: new Operation({
        tags: ['pet'],
        summary: 'Update an existing pet',
        description: 'Update an existing pet by Id',
        operationId: 'updatePet',
        deprecated: false,
      })
    }),
    '/pet/{petId}': new PathItem({
      get: new Operation({
        tags: ['pet'],
        operationId: 'getPetById',
        summary: 'Find pet by ID',
        description: 'Returns a single pet',
      })
    }),
    '/pet/findByStatus': new PathItem({
      get: new Operation({
        tags: ['pet'],
        operationId: 'findPetsByStatus',
        summary: 'Finds Pets by status',
        description: 'Multiple status values can be provided with comma separated strings'
      })
    }),
    '/pet/findByTags': new PathItem({
      get: new Operation({
        tags: ['pet'],
        operationId: 'findPetsByTags',
        summary: 'Finds Pets by tags',
        description: `Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.`,
      })
    }),
  })
});

app.synth();
