
exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient", 255);
  })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_title", 255)

    })
    .createTable("recipes_ingredients", tbl => {
        tbl.increments();
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes");
        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("ingredients");
    })

};

exports.down = function(knex) {

};
