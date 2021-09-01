import path from "path";

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const CopyPlugin = require("copy-webpack-plugin");

const specPath = path.resolve(process.cwd(), "cdkoa.out", "my-api.yaml");

const config = {
  entry: {
    app: [
      path.resolve(__dirname, "../../../node_modules/webpack-dev-server/client/index.js?hot=true&live-reload=true"),
      path.resolve(__dirname, "www/swagger.js"),
      specPath
    ]
  },
  module: {
    rules: [{
      test: specPath,
      type: 'asset/resource'
    }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "../../../node_modules/swagger-ui/dist/swagger-ui.css"), to: "swagger-ui/dist/swagger-ui.css" },
        { from: specPath, to: "api.yaml" }
      ],
    }),
  ],
  output: {
    filename: "swagger.bundle.js"
  },
  stats: 'minimal',
  mode: 'development',
  devServer: {
    hot: true,
    inline: true
  },
};

const compiler = webpack(config);

const server = new WebpackDevServer({
  static: path.join(__dirname, 'www'),
  open: true
}, compiler);

export default server;

