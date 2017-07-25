// HTTPS request force
const requireHttps = require('hapi-require-https');
const https = global.app.https;

module.exports = function (Server) {
  if (https && https.enable) {
    Server.register({
      register: requireHttps,
      options:  https.options
    });
  }
}