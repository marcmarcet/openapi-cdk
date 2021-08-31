import { IOperation } from "./operation";

export interface IPathItem {
  summary?: string;
  description?: string;
  get?: IOperation;
  put?: IOperation;
  post?: IOperation;
  delete?: IOperation;
  options?: IOperation;
  head?: IOperation;
  patch?: IOperation;
  trace?: IOperation;
}

export class PathItem implements IPathItem {
  summary?: string;
  description?: string;
  get?: IOperation;
  put?: IOperation;
  post?: IOperation;
  delete?: IOperation;
  options?: IOperation;
  head?: IOperation;
  patch?: IOperation;
  trace?: IOperation;
}
