const objectAssign = require('object-assign');
const isProd = (process.env.NODE_ENV == 'prod') ? true : false;

var appGlobals = {
  isProd: isProd,
  server: {
    host: (isProd) ? '0.0.0.0' : 'localhost',
    port: (isProd) ? process.env.PORT : 8000
  },,
  https: {
    enable: isProd,
    options: {}
  }
}

global.App = appGlobals;