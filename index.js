// Define our global vars
require('./server/globals');

const Server = require('./server/index');

Server.init(function(err) {
  if (err) console.error(err)
});