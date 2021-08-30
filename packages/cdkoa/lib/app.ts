import { Construct, ConstructOptions } from "constructs";

export interface AppProps extends ConstructOptions {
}

export class App extends Construct {
  constructor(props: AppProps) {
    super(undefined as any, '', props);
  }

  synth() {
    console.log('hola');
  }
}
