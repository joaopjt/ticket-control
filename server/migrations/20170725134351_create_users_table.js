
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('users', function(table) {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('pass');
    table.string('doc-number');
    table.timestamps(true, true);
  }).then(function() {
    console.log('Table "users" created with success!');
  }).catch(function(err) {
    console.log('Error at create "users" table: ', err);
  });  
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('users', function() {
    console.log('Table "users" dropped with success!');
  })
};
