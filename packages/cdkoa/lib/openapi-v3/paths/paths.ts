import { IPath } from "../path";
import { PathsProps } from "./paths-props";

/**
 *
 */
export interface IPaths {
  [path: string]: IPath;
}

/**
 *
 */
export class Paths implements IPaths {
  [path: string]: IPath;

  constructor(paths: PathsProps) {
  }
}
