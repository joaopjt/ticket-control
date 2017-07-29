const fs = require('fs');
const path = require('path');
const Boom = require('boom');

module.exports = {
  post(req, res) {
    const data = req.payload;
    const file = data.qr;

    if (file) {
      const name = file.hapi.filename;
      const ext = path.extname(name);

      if(ext.match(/\.(gif|jpg|jpeg|tiff|png)$/i)) {
        const filepath = process.cwd() + '/uploads/' + name;
        console.log(filepath);
        const stream = fs.createWriteStream(filepath);
        const reply = { message: '', errors: []};

        stream.on('error', function(err) {
          reply.errors.push({ error: err });
        });

        file.pipe(stream);

        file.on('end', function() {
          reply.message = 'File uploaded with success!';

          res(reply).code(200);
        });

      } else {
        const reply = Boom.notAcceptable('Not acceptable image format.');

        res(reply);
      }
    }
  }
}