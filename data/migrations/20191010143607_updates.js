
exports.up = function(knex) {
  return knex.schema.table("recipes", tbl => {
      tbl.text("instructions", 1000);
  })
    .table("recipes_ingredients", tbl => {
        tbl.string("amount", 150)
    })
};

exports.down = function(knex) {
  
};
