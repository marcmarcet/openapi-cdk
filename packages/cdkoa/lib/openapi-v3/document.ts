import { Construct, ConstructOptions } from "constructs";
import { Info } from "./info";
import { Paths } from "./paths";

export interface DocumentProps extends ConstructOptions {
  openapi: string;
  info: Info;
  paths: Paths;
}

export interface IDocument {
  openapi: string;
  info: Info;
  paths: Paths;
}

export class Document extends Construct implements IDocument {
  openapi: string;
  info: Info;
  paths: Paths;

  constructor(scope: Construct, id: string,  options: DocumentProps) {
    super(scope, id, options);
    this.openapi = options.openapi;
    this.info = options.info;
    this.paths = options.paths;
  }
}
