
export interface InfoProps {
  /**
   * REQUIRED. The title of the API.
   */
  title: string;

  /**
   * A description of the API. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * A URL to the Terms of Service for the API. This MUST be in the form of a URL.
   */
  termsOfService?: string;

  /**
   * REQUIRED. The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).
   */
  version: string;
}
