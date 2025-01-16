const favouriteRecipeModel = require("../models/favouriteRecipes")


const favouriteRecipes = async(req, res) =>{
    try{
        const bodyDetails = req.body
        console.log(bodyDetails)
        const recipe = await favouriteRecipeModel.create(bodyDetails)
        res.status(200).json({
            status:"Success",
            message: "Successfully posted favourited recipe",
            recipe
        })
    }catch(err){
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}
const getFavouriteRecipes = async(req, res)=>{
    try{
        const data = await favouriteRecipeModel.find()
        res.status(200).json({
            status: "success",
            recipes: data
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}
const getRecipe = async(req, res)=>{
    try{
        const {id} = req.params
        const recipeItem = await favouriteRecipeModel.findById(id)
        res.status(200).json({
            status: "success",
            recipe: recipeItem
        })
    }catch(err){
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }
}
const deleteRecipe = async(req, res) =>{
    try{
        const {deleteId} = req.params
        console.log("delete", deleteId)
        const recipe = await favouriteRecipeModel.findByIdAndDelete(deleteId)
        res.status(200).json({
            status: "success",
            recipe
        })
    }catch(err){
        res.status(404).json({
            status: "Failure",
            message: err.message
        })
    }
}
module.exports = {favouriteRecipes, deleteRecipe, getFavouriteRecipes, getRecipe};