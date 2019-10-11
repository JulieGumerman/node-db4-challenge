
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'nut butter'},
        {id: 2, ingredient: 'bread'},
        {id: 3, ingredient: 'raisins'}, 
        {id: 4, ingredient: 'jelly, flavor of your choice'},
        {id: 5, ingredient: "cheese"},
        {id: 6, ingredient: "celery"}
      ]);
    });
};
