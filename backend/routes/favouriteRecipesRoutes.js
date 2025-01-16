const express = require("express")
const {favouriteRecipes,deleteRecipe, getFavouriteRecipes, getRecipe} = require("../handlers/favouriteRecipesHandlers")
const FavouriteRecipesRouter = express.Router()

FavouriteRecipesRouter.post("/addFavourites", favouriteRecipes)
FavouriteRecipesRouter.delete("/favouriteRecipe/:deleteId", deleteRecipe)
FavouriteRecipesRouter.get("/getFavourites", getFavouriteRecipes)
FavouriteRecipesRouter.get("/getRecipe/:id", getRecipe)

module.exports = FavouriteRecipesRouter;