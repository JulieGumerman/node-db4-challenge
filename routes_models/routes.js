const express = require("express");
const router = express.Router();
const db = require("../data/dbconfig.js")

router.get("/", (req, res) => {
    res.send("yaaassss!")
})

// router.get("/shoppinglist", (req, res) => {
//     db("recipes_ingredients").get
// })

// router.get("/recipes", (req, res) => {
//     db("recipes").get...
// })

// router.get("/instructions", (req, res) => {
//     db("instructions").get...
// })

module.exports = router;