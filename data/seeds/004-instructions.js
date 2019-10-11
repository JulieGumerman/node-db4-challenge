
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step_number: 1, instruction: "cut celery stalks into pieces"},
        {id: 2, recipe_id: 1, step_number: 2, instruction: "smear nut butter in groove on stalk"},
        {id: 3, recipe_id: 1, step_number: 3, instruction: "dot raisins along the top"},
        {id: 4, recipe_id: 2, step_number: 1, instruction: "smear nut butter on one side of bread"},
        {id: 5, recipe_id: 2, step_number: 2, instruction: "smear jelly on other side of bread"},
        {id: 6, recipe_id: 2, step_number: 3, instruction: "put pieces of bread together"},
        {id: 7, recipe_id: 3, step_number: 1, instruction: "butter outside of bread"},
        {id: 8, recipe_id: 3, step_number: 2, instruction: "place or spread cheese on other side"},
        {id: 9, recipe_id: 3, step_number: 3, instruction: "put together as sandwich and toast until golden"}            

      ]);
    });
};

// tbl.integer("recipe_id")
// .unsigned()
// .notNullable()
// .references("id")
// .inTable("recipes")
// tbl.integer("step _number", 3).notNullable();
// tbl.string("instruction", 300).notNullable();