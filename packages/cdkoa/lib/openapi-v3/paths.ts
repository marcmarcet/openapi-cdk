import { IPathItem } from "./path-item";
import { PathsProps } from "./paths-props";

export interface IPaths {
  [path: string]: IPathItem;
}

export class Paths implements IPaths {
  [path: string]: IPathItem;

  constructor(props: PathsProps) {
    Object.keys(props).forEach((path: string) => {
      this[path] = props[path];
    })
  }
}
