import { OperationProps } from "./operation-props";

export interface IOperation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: any;
  operationId: string;
  parameters?: any;
  requestBody?: any;
  responses?: any;
  callbacks?: any;
  deprecated: boolean;
  security?: any;
  servers: any;
}

export class Operation implements IOperation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: any;
  operationId: string;
  parameters?: any;
  requestBody?: any;
  responses?: any;
  callbacks?: any;
  deprecated: boolean;
  security?: any;
  servers: any;

  constructor(props: OperationProps) {
    this.tags = props.tags;
    this.summary = props.summary;
    this.description = props.description;
    this.externalDocs = props.externalDocs;
    this.operationId = props.operationId;
    this.parameters = props.parameters;
    this.requestBody = props.requestBody;
    this.responses = props.responses;
    this.callbacks = props.callbacks;
    this.deprecated = props.deprecated;
    this.security = props.security;
    this.servers = props.servers;
  }
}
