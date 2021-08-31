import { PathItem, Operation } from "../../../cdkoa/lib/openapi-v3";

export default new PathItem({
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
});
