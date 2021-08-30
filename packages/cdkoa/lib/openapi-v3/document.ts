import { Info } from "./info";
import { Paths } from "./paths";

export interface Document {
  openapi: string;
  info: Info;
  //servers?: ServerObject[];
  paths: Paths;
  //components?: ComponentsObject;
  //security?: SecurityRequirementObject[];
  //tags?: TagObject[];
  //externalDocs?: ExternalDocumentationObject;
}
