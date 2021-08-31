import { Operation, PathItem } from "../../../cdkoa/lib/openapi-v3";

export default new PathItem({
  get: new Operation({
    tags: ['pet'],
    operationId: 'getPetById',
    summary: 'Find pet by ID',
    description: 'Returns a single pet',
  })
});
