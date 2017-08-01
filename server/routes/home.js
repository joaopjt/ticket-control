module.exports = function(app) {

  app.route({
    method: 'GET',
    path: '/',
    config: { auth: false },
    handler: {
      file: {
        path: 'views/index.html'
      }
    }
  });

}
