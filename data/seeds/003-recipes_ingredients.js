
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, amount: "1/2 cup" },
        {id: 2, recipe_id: 1, ingredient_id: 6, amount: "2 stalks" },
        {id: 3, recipe_id: 1, ingredient_id: 3, amount: "1/4 cup" },
        {id: 4, recipe_id: 2, ingredient_id: 1, amount: "1/4 cup" },
        {id: 5, recipe_id: 2, ingredient_id: 2, amount: "2 slices" },
        {id: 6, recipe_id: 2, ingredient_id: 4, amount: "1/4 cup" },
        {id: 7, recipe_id: 3, ingredient_id: 2, amount: "2 slices" },
        {id: 8, recipe_id: 3, ingredient_id: 5, amount: "2 slices or 1/4 cup"}

      ]);
    });
};
