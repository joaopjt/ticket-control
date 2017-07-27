const handlers = require('../controllers/endpoints/tickets');

module.exports = function(app) {
  app.route({
    method: 'GET',
    path: '/tickets/{param*}',
    handler: {
      directory: {
        path: 'views/tickets',
        etagMethod: false
      }
    }
  })

  app.route({
    method: 'POST',
    path: '/tickets',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data'
      }
    },
    handler: handlers.post
  });

}