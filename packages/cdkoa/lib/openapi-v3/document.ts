import path from "path";
import fs from "fs";
import { Construct, Node } from "constructs";
import { DocumentProps } from ".";
import { IInfo } from "./info";
import { IPaths } from "./paths";

import * as YAML from 'js-yaml';

export interface IDocument {
  openapi: string;
  info: IInfo;
  paths: IPaths;
}

export class Document extends Construct implements IDocument {
  openapi: string = "3.0.3";
  info: IInfo;
  paths: IPaths;

  constructor(scope: Construct, id: string,  props: DocumentProps) {
    super(scope, id, props);
    this.info = props.info;
    this.paths = props.paths;
  }

  onSynthesize(ctx: unknown) {
    let outfilePath = path.join(process.cwd(), 'cdkoa.out', `${Node.of(this).id}.yaml`);

    //let outfile = JSON.stringify(this, null, 2);
    let outfile = YAML.dump(this, {});

    fs.promises.mkdir(path.join(process.cwd(), 'cdkoa.out'), {recursive: true}).then(() => {
      return fs.promises.writeFile(outfilePath, outfile, {flag: 'w'})
    });
  }
}
