
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_title: "ants on a log", instructions: "cut celery in pieces, spread nut butter on top, put raisins on" },
        {id: 2, recipe_title: "pbj sammich", instructions: "spread nut butter on one piece of bread, spread jam on the other, squish together. Pair with a glass of milk."},
        {id: 3, recipe_title: "grilled cheese", instructions: "put a slice of cheese between pieces of bread, cook until cheese is runny and bread is toasty"}
      ]);
    });
};
