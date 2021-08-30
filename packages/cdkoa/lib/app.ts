import {  Construct, ConstructOptions, Node } from "constructs/lib/construct";

export interface AppProps extends ConstructOptions {
}

export class App extends Construct {
  constructor(props: AppProps) {
    super(undefined as any, '', props);
  }

  synth() {
    Node.of(this).synthesize({
      outdir: "x"
    });
  }
}
