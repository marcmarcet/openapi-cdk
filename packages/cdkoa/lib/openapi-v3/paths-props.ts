import { IPathItem } from "./path-item";

export interface PathsProps {
  /**
   * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints.
   * The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
   */
  [path: string]: IPathItem;
}
