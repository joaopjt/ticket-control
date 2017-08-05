const handlers = require('../controllers/endpoints/tickets');

module.exports = function(app) {
  app.route({
    method: 'POST',
    path: '/tickets',
    handler: handlers.validate
  });

  app.route({
    method: 'GET',
    path: '/tickets',
    handler: handlers.get
  });
}