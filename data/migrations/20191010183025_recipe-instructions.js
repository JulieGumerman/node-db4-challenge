
exports.up = function(knex) {
  return knex.schema.createTable("instructions", tbl => {
      tbl.increments();
      tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
      tbl.integer("step_number", 3).notNullable();
      tbl.string("instruction", 300).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions")
};
