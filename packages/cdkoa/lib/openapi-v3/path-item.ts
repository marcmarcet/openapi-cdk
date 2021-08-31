import { IOperation } from "./operation";
import { PathItemProps } from "./path-item-props";

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

  constructor(props: PathItemProps) {
    this.summary = props.summary;
    this.description = props.description;
    this.get = props.get;
    this.put = props.put;
    this.post = props.post;
    this.delete = props.delete;
    this.options = props.options;
    this.head = props.head;
    this.patch = props.patch;
    this.trace = props.trace;
  }
}
