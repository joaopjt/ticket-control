const consign = require('consign');
const path = require('path');

module.exports = {
  load(Server) {
    // Load server resources
    consign({ 
        cwd: path.resolve(__dirname, '../'),
        verbose: !App.isProd 
      })
      .include('middlewares')
      .then('routes')
      .into(Server);
  }
}