import { IOperation } from "./operation";

export interface PathItemProps {
  /**
   * An optional, string summary, intended to apply to all operations in this path.
   */
  summary?: string;

  /**
   * An optional, string description, intended to apply to all operations in this path.
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * A definition of a GET operation on this path.
   */
  get?: IOperation;

  /**
   * A definition of a PUT operation on this path.
   */
  put?: IOperation;

  /**
   * A definition of a POST operation on this path.
   */
  post?: IOperation;

  /**
   * A definition of a DELETE operation on this path.
   */
  delete?: IOperation;

  /**
   * A definition of a OPTIONS operation on this path.
   */
  options?: IOperation;

  /**
   * A definition of a HEAD operation on this path.
   */
  head?: IOperation;

  /**
   * A definition of a PATCH operation on this path.
   */
  patch?: IOperation;

  /**
   * A definition of a TRACE operation on this path.
   */
  trace?: IOperation;

  /**
   *
   */
  parameters?: any;
}
