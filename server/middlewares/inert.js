const Inert = require('inert');

module.exports = function(server) {
  server.register({ register: Inert })
    .then(function(err) {
      console.log(err);
    })
    .catch(function(err) {
      console.log(err);
    });
}