const handlers = require('../controllers/pages/home');

module.exports = function(app) {

  app.route({
    method: 'GET',
    path: '/',
    config: { auth: false },
    handler: handlers.get
  });

}