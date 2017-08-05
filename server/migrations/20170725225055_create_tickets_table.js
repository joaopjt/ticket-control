
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('tickets', function(table) {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
    table.string('event');
    table.string('ticket_hash');
    table.boolean('avaiable');
  }).then(function() {
    console.log('Table "tickets" created with success!');
  }).catch(function(err) {
    console.log('Error at create "tickets" table: ', err);
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('tickets', function() {
    console.log('Table "tickets" dropped with success!');
  });
};
