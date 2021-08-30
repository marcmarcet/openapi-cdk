import path from "path";
import fs from "fs";
import { Construct, Node } from "constructs";
import { IPaths } from "../paths/paths";
import { DocumentProps } from "./document-props";
import { IInfo } from "../info/info";

/**
 *
 */
export interface IDocument {
  openapi: string;
  info: IInfo;
  paths: IPaths;
}

/**
 *
 */
export class Document extends Construct implements IDocument {
  openapi: string = "3.1.0";
  info: IInfo;
  paths: IPaths;

  constructor(scope: Construct, id: string,  props: DocumentProps) {
    super(scope, id, props);
    this.info = props.info;
    this.paths = props.paths;
  }

  onSynthesize(ctx: any) {
    fs.writeFileSync(
      path.join(process.cwd(), 'cdkoa.out', `${Node.of(this).id}.json`),
      JSON.stringify(this, null, 2),
      { flag: 'w' });
  }
}
