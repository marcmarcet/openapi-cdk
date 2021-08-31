export interface OperationProps {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: any;

  /**
   * Unique string used to identify the operation. The id MUST be unique among all operations described in the API.
   * The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation,
   * therefore, it is RECOMMENDED to follow common programming naming conventions.
   */
  operationId: string;

  parameters?: any;

  requestBody?: any;

  responses?: any;

  callbacks?: any;

  /**
   * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false.
   */
  deprecated: boolean;

  security?: any;

  servers: any;
}
