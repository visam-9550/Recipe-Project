const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Mention username"]
    },
    title:{
        type: String,
        required: [true, "Mention food recipe title"],
        unique: [true, "Recipe already exist"]
    },
    time:{
        type: Number,
        required: [true, "Mention time"]
    },
    ingredients:{
        type: String,
        required: [true, "Mention required ingredients for your recipe"]
    },
    process:{
        type: String,
        required: [true, "Mention making process for your recipe"]
    },
    image:{
        type: String,
        required: [true, "Mention your image url"]
    },
    favourite:{
        type: Boolean,
        required: true
    }
}, {timestamps: true})

const foodRecipeModel = mongoose.model("foodRecipeModel", recipeSchema)

module.exports = foodRecipeModel;