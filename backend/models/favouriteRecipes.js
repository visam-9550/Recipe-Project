const mongoose = require("mongoose")

const favouriteRecipe = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    time:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    favourite:{
        type:Boolean,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    process: {
        type: String,
        required: true
    }
})

const favouriteRecipeModel = mongoose.model("favouriteRecipeModel", favouriteRecipe)

module.exports = favouriteRecipeModel;