const Inert = require('inert');

module.exports = function(server) {
  server.register(Inert, () => {});
}