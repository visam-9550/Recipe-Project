import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RecipeDetailsContainer,FavouriteRecipeDetailsLeftContainer,FavouriteRecipeDetailsRightContainer,FavouriteRecipeDetailsMobileViewContainer, ImageTitleContainer, IngredientsHeading,  TimeDurationHeading, RecipeDetailsTopContainer, RecipeDetailsTopDescrationContainer, RecipeImage, RecipeTitle, TimeDuration, RecipeIngredients,  ProcessHeading, Process } from "./styledComponents";

import React from 'react'

function FavouriteRecipeDetails() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [err, setErr] = useState(false)
    const recipeData = async() =>{
        try{
            setLoading(true)
            const resp = await fetch(`http://localhost:3000/api/getRecipe/${id}`)
            const data = await resp.json()
            setLoading(false)
            setData(data.recipe)
            
        }catch(err){
            setLoading(false)
            setErr(true)
        }
    }
    useEffect(() => {recipeData()}, [])
    if(loading){

    }
    if(err){

    }
    console.log(data.image)
  return (
    <RecipeDetailsContainer>
        <FavouriteRecipeDetailsLeftContainer>
            <IngredientsHeading>Ingredients :-</IngredientsHeading>
            <RecipeIngredients>{data.ingredients}</RecipeIngredients>
            <TimeDurationHeading>Time duration :-</TimeDurationHeading>
            <TimeDuration>{data.time} Minutes to take complete the Recipe</TimeDuration>
        </FavouriteRecipeDetailsLeftContainer>
        
        <FavouriteRecipeDetailsRightContainer>
            <ImageTitleContainer>
                <RecipeTitle>{data.title} Recipe Details :-</RecipeTitle>
                <RecipeImage src = {data.image} />
            </ImageTitleContainer>
            <FavouriteRecipeDetailsMobileViewContainer>
                <IngredientsHeading>Ingredients :-</IngredientsHeading>
                <RecipeIngredients>{data.ingredients}</RecipeIngredients>
                <TimeDurationHeading>Time duration :-</TimeDurationHeading>
                <TimeDuration>{data.time} Minutes to take complete the Recipe</TimeDuration>
            </FavouriteRecipeDetailsMobileViewContainer>
            <div>
                <ProcessHeading>Directions to prepare recipe :-</ProcessHeading>
                <Process>{data.process}</Process>
            </div>
        </FavouriteRecipeDetailsRightContainer>
    </RecipeDetailsContainer>
  )
}

export default FavouriteRecipeDetails