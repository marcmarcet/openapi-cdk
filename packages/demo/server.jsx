const SwaggerUI = require('swagger-ui')
import 'swagger-ui/dist/swagger-ui.css';

global.Buffer = global.Buffer || require('buffer').Buffer;

const file = require("./cdkoa.out/my-api.json")


let x = SwaggerUI({
  dom_id: '#myDomId',
  spec: file,

});

