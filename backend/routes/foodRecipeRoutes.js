const express = require("express")
const {createRecipe, getAllRecipes, getRecipe, editRecipe, deleteRecipe} = require("../handlers/foodRecipe")
const RecipeRouter = express.Router()

RecipeRouter.post("/createRecipe", createRecipe)
RecipeRouter.get("/getRecipes", getAllRecipes)
RecipeRouter.get("/getRecipe/:id", getRecipe)
RecipeRouter.put("/editRecipe/:id", editRecipe)
RecipeRouter.delete("/deleteRecipe/:id", deleteRecipe)


module.exports = RecipeRouter;