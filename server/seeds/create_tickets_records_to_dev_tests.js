
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {user_id: 1, event: 'Balada do louco', ticket_hash: 'HASG13213HS1SDASDAAIGYRJl-1', avaiable: 1},
        {user_id: 2, event: 'Balada do louco', ticket_hash: 'HASG13213HS1SDASDAAIGYRJl-2', avaiable: 1},
        {user_id: 3, event: 'Balada do louco', ticket_hash: 'HASG13213HS1SDASDAAIGYRJl-3', avaiable: 1}
      ]);
    });
};
