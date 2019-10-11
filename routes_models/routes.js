const express = require("express");
const router = express.Router();
const Cookbook = require("./models.js");

router.get("/", (req, res) => {
    res.send("yaaassss!")
})

router.get("/recipes/:id/shoppinglist", (req, res) => {
   Cookbook.getShoppingList(req.params.id)
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json({message: "You're on your own on your shopping list, pal"}))
})

router.get("/recipes", (req, res) => {
    Cookbook.findRecipes()
    .then(recipes => res.status(200).json(recipes))
})

router.get("/recipes/:id", (req, res) => {
    Cookbook.findRecipeById(req.params.id)
        .then(recipe => res.status(200).json(recipe))
        .catch(err => res.status(500).json({ error: "Order pizza from Domino's. Don't use this star-crossed recipe"}))
})

// router.get("/instructions", (req, res) => {
//     db("instructions").get...
// })

module.exports = router;