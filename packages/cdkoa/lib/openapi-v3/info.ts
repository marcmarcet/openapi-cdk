import { InfoProps } from "./info-props";

export interface IInfo {
  title: string;
  description?: string;
  termsOfService?: string;
  version: string;
}

export class Info implements IInfo {
  title: string;
  description?: string;
  termsOfService?: string;
  version: string;

  constructor(props: InfoProps) {
    this.title = props.title;
    this.description = props.description;
    this.termsOfService = props.termsOfService;
    this.version = props.version;
  }
}

