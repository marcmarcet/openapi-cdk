import { ConstructOptions } from "constructs";
import { IInfo } from "../info/info";
import { IPaths } from "../paths/paths";

export interface DocumentProps extends ConstructOptions {
  /**
   * REQUIRED. Provides metadata about the API. The metadata MAY be used by tooling as required.
   */
  info: IInfo;

  /**
   * The available paths and operations for the API.
   */
  paths: IPaths;
}
