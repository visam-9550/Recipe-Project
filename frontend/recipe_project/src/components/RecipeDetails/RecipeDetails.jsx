import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RecipeDetailsContainer, RecipeDetailsTopContainer, RecipeDetailsTopDescrationContainer, RecipeImage, RecipeTitle, RecipeDuration, RecipeIngredients, Span, HRLine,RecipeDetailsTopProcessContainer, ProcessHeading, Process } from "./styledComponents";

import React from 'react'

function RecipeDetails() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [err, setErr] = useState(false)
    const recipeData = async() =>{
        try{
            setLoading(true)
            const resp = await fetch(`http://localhost:3000/getRecipe/${id}`)
            const data = await resp.json()
            console.log(data)
            setLoading(false)
            setData(data.recipe)
            console.log(data.recipe)
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
    console.log(data)
  return (
    <RecipeDetailsContainer>
        <RecipeDetailsTopContainer>
            <RecipeImage src = {data.image} />
            <RecipeDetailsTopDescrationContainer>
                <RecipeTitle>
                    {data.title} Recipe Details
                </RecipeTitle>
                <RecipeDuration>
                    <Span>Time:- </Span>
                    {data.time} minutes
                </RecipeDuration>
                <RecipeIngredients>
                    <Span>Ingredients:- </Span>
                    {data.ingredients}
                </RecipeIngredients>
            </RecipeDetailsTopDescrationContainer>
        </RecipeDetailsTopContainer>
        <HRLine />
        <RecipeDetailsTopProcessContainer>
            <ProcessHeading>Preparation process</ProcessHeading>
            <Process>
                {data.process}
            </Process>
        </RecipeDetailsTopProcessContainer>
    </RecipeDetailsContainer>
  )
}

export default RecipeDetails