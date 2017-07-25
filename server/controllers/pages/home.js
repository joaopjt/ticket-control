module.exports = {
  get(req, res) {
     return res('We are with HTTPS?').code(200);
  }
}