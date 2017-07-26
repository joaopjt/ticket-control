
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'testenildo_1', email: 'testenildo_1@call911.com', pass: 'pass1', 'doc-number': '404-420-666_1'},
        {name: 'testenildo_2', email: 'testenildo_2@call911.com', pass: 'pass2', 'doc-number': '404-420-666_2'},
        {name: 'testenildo_3', email: 'testenildo_3@call911.com', pass: 'pass3', 'doc-number': '404-420-666_3'}
      ]);
    });
};
