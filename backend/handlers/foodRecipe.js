const { trusted } = require("mongoose")
const foodRecipeModel = require("../models/foodRecipeModel")


const createRecipe = async(req, res) =>{
    try{
        const bodyDetails = req.body
        const newRecipe = await foodRecipeModel.create(bodyDetails)
        res.status(200).json({
            status:"Success",
            message: "Successfully posted recipe",
            newRecipe
        })
    }catch(err){
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}

const getAllRecipes = async(req, res) =>{
    try{
        const recipesData = await foodRecipeModel.find()
        res.status(200).json({
            status: "success",
            recipesData
        })
    }catch(err){
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}

const getRecipe = async(req, res) =>{
    try{
        const {id} = req.params
        const recipe = await foodRecipeModel.findById(id)
        console.log(getRecipe)
        if(recipe){
            res.status(200).json({
                status: "Success",
                message: "Successfully get the recipe",
                recipe
            })
                
        }else{
            res.status(404).json({
                status:"Failure",
                message: "Invalid id"
            })
        }
    }catch(err){
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}

const editRecipe = async(req, res) =>{
    try{
        const {id} = req.params
        const bodyDetails = req.body
        console.log("bodyDetails")
            const updatedRecipe = await foodRecipeModel.findByIdAndUpdate(id, bodyDetails, {new: true})
            // console.log(updatedRecipe)
            res.status(200).json({
                status: "Success",
                message: "Succesffully updated the recipe data",
                updatedRecipe
            })
    }catch(err){
        res.status(400).json({
            status: "failure",
            message: err.message
        })
    }
}

const deleteRecipe = async(req, res)=>{
    try{
        const {id} = req.params
        const deletedRecipe = await foodRecipeModel.findByIdAndDelete(id)
        if(deletedRecipe != null){
            res.status(200).json({
                status: "Success",
                message: "Successfully deleted the recipe",
                deletedRecipe
            })
        }else{
            res.status(404).json({
                status: 'Failure',
                message: "Invalid recipe id"
            })
        }
    }catch(err){
        res.status(500).json({
            status: 'Failure',
            message: err.message
        })
    }
}

module.exports = {createRecipe, getRecipe, getAllRecipes, editRecipe, deleteRecipe}