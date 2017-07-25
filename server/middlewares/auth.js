// Auth middleware with JWT
const jwt = 'REQUIRE JWT HERE';

module.exports = function (Server) {
  if (!global.app.isProd) console.log('AUTH MIDDLEWARE LOADED');
}