import { PathItem, Operation } from "../../../cdkoa/lib/openapi-v3";

export default new PathItem({
  get: new Operation({
    tags: ['pet'],
    operationId: 'findPetsByStatus',
    summary: 'Finds Pets by status',
    description: 'Multiple status values can be provided with comma separated strings'
  })
});
