const db = require("../data/dbconfig.js")



const findRecipes = () => {
    return db("recipes");
}

const findRecipeById = (id) => {
    return db("recipes").where({id})
}

const getShoppingList = (id) => {
    return db("recipes_ingredients as r")
        .join("ingredients as i", "i.id", "=", "r.ingredient_id")
        .where("recipe_id", "=", id)
        .select("i.ingredient", "r.amount")
        
}

const getDirections = (id) => {
    return db("instructions").where("recipe_id", "=", id)
}

module.exports = {
    findRecipes,
    findRecipeById,
    getShoppingList,
    getDirections
}