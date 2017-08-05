const fs = require('fs');
const path = require('path');
const Boom = require('boom');
const crypt = require('crypto-js/sha256');
const axios = require('axios');

module.exports = {
  validate(req, res) {
    const data = req.payload;

    if(data.ticket) {
      DB.select('tickets.id', 'tickets.avaiable', 'users.name', 'users.doc-number')
        .table('tickets')
        .where({
          ticket_hash: data.ticket,
          avaiable: 1
        })
        .innerJoin('users', 'tickets.user_id', 'users.id')
        .limit(1)
        .then(function(rows) {
          const qr = rows[0];

          if(qr.avaiable) {
            DB('tickets')
              .where({
                id: qr.id
              })
              .update({
                avaiable: 0
              })
              .then(function(up) {
                const reply = {
                  message: 'Ticket validated with success',
                  data: {
                    user: {
                      name: qr.name,
                      doc: qr['doc-number']
                    }
                  }
                };

                res(reply).code(200);
              })
              .catch(function(err) {
                const reply = Boom.badImplementation('Internal server error at upate ticket status.');
                console.log('ERROR AT UPDATE', err);

                res(reply);
              });
          }
        })
        .catch(function(err) {
          const reply = Boom.unauthorized('Ticket not found or invalid.');
          res(reply);
        });

    } else {
      const reply = Boom.badData('Ticket code is empty.');
      res(reply);
    }
  },

  validateByUpload(req, res) {
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
  },

  get(req, res) {
    let hash = (typeof req.query.hash === 'string') ? req.query.hash : res({ message: 'Invalid hash sended', details: 'Request data should be an string.'}).code(400);

    axios.request('https://chart.googleapis.com/chart', {
      params: {
        cht: 'qr',
        chl: hash,
        chs: '300x300'
      },
      responseType: 'arraybuffer'
    }).then(function(r) {

      res(r.data)
        .type('image/png')
        .encoding('binary');

    }).catch(function(err) {
      
      res({
        message: 'Error at get QR code image.',
        details: err
      }).code(500);

    });
  }
}