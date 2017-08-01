module.exports = function(app) {

  app.route({
    method: 'GET',
    path: '/',
    config: { auth: false },
    handler: {
      directory: {
        path: 'views',
        etagMethod: false
      }
    }
  });

}