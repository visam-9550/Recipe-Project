import { MyRecipeItemDetailContainer, RecipeDetailsContainer, Title, Time, SpanElement, Process, Ingredients, RecipeImage, HRLine,DeleteEditIconsContainer, EditIcon, DeleteIcon, EmptyDataText } from "./styledComponents";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { TiEdit } from "react-icons/ti";
import React from 'react'
import { useEffect, useState } from "react";
import Cookie from "js-cookie"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EditSlice from "../Redux/Slices/editRecipeSlice";
const actions = EditSlice.actions
function MyRecipeItemDetails() {
    const userDetails = JSON.parse(Cookie.get("userDetails"))
    const userEmail = userDetails.email;
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const fetchingData = async() =>{
      try{
        setLoading(true)
        const recipesData = await fetch("http://localhost:3000/getRecipes")
        const data = await recipesData.json()
        const filterdData = data.recipesData.filter((eachItem) =>
          eachItem.username === userEmail
        )
        setLoading(false)
        setData(filterdData)

      }catch(err){
        setLoading(false)
        setError(true)
      }
    }
    useEffect(() =>{
      fetchingData()
    }, [])
    const clickOnDeleteIcon = async(id) =>{
        try {
            const options = {
              method: 'DELETE',
              headers: {
                'Content-type': 'application/json',
              },
            };
            const resp = await fetch(`http://localhost:3000/deleteRecipe/${id}`, options);
            const result = await resp.json();
            if (resp.ok) {
              alert(result.message);
              const filterdData = data.filter((eachRecipe) => 
                eachRecipe._id !== id
                )
                setData(filterdData)
              dispatch(actions.getRecipesData(filterdData));
            } else {
              console.error('Error deleting the recipe:', result.message);
            }
          } catch (err) {
            console.log(err.message);
          }
    }
    const clickOnEditIcon = async(id) =>{
            dispatch(actions.setEditStatus(true))
            dispatch(actions.setEditId(id))
    }
  return(
    <>

      {data.length === 0 ? <>
          <EmptyDataText>No recipes are created</EmptyDataText>
      </>
      : 
      <>
        {data.map((recipe) => {
            return(
            <MyRecipeItemDetailContainer key = {recipe._id}>
            <RecipeImage src = {recipe.image} />
            <HRLine />
            <RecipeDetailsContainer>
                <Title>
                    {recipe.title}
                </Title>
                <Time>
                    <SpanElement>Duration:- </SpanElement>
                    <br />
                    {recipe.time} min
                </Time>
                <Ingredients>
                    <SpanElement>Ingredients:- </SpanElement>
                    <br />
                    {recipe.ingredients}
                </Ingredients>
                <Process>
                    <SpanElement>Process:- </SpanElement>
                    <br />
                    {recipe.process}
                </Process>
                <DeleteEditIconsContainer>
                    <DeleteIcon onClick = {() => clickOnDeleteIcon(recipe._id)}>
                        <DeleteSweepIcon />
                    </DeleteIcon>
                    <Link to = "/addRecipe">
                    <EditIcon onClick = {() => clickOnEditIcon(recipe._id)}>
                        <TiEdit />
                    </EditIcon>
                    </Link>
                </DeleteEditIconsContainer>
            </RecipeDetailsContainer>
    
        </MyRecipeItemDetailContainer>
        )})}
      </>
      }
    </>
  )
}

export default MyRecipeItemDetails