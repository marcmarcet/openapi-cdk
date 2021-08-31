import { PathItem, Operation } from "../../../cdkoa/lib/openapi-v3";

export default new PathItem({
  get: new Operation({
    tags: ['pet'],
    operationId: 'findPetsByTags',
    summary: 'Finds Pets by tags',
    description:
`Multiple tags can be provided with comma separated strings. Use tag1,
tag2, tag3 for testing.`,
  })
});
