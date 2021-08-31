import { IPathItem } from "./path-item";
import { PathsProps } from "./paths-props";

export interface IPaths {
  [path: string]: IPathItem;
}

export class Paths implements IPaths {
  [path: string]: IPathItem;

  constructor(paths: PathsProps) {
  }
}
