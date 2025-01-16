import { Container, FavouriteRecipesContainer, RecipeItemcontainer, RecipeImage, RecipeTitle, RecipeInfoContainer, FavouriteIcon, GetMoreButton, DeleteIcon, EmptyDataHeading } from "./styledComponents";
import { useEffect, useState } from "react";
import React from 'react'
import Cookie from "js-cookie"
import { ClipLoader } from 'react-spinners';
import Header from "../Header/Header";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { IoIosHeart } from 'react-icons/io';
import { Link } from "react-router-dom";


function FavouritesRecipes() {
  const backgroundColors = ["#699AD7", "#615EB5", "#606061", "#5A2F6F", "#5A2F6F", "#4E3B49", "#4E3B49", "#5F3E45", "#D3C96A", "#848163", "#AD7448", "#B65913", "#B64B47", "#91100B", "#504848"]
  const random = Math.ceil(Math.random() * backgroundColors.length)
  // console.log(random)
  const backgroundColor = backgroundColors[random]
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)
  const [data, setData] = useState([])

    const fetchingData = async() =>{
        try{
            setLoading(true)
            const userDetails = JSON.parse(Cookie.get("userDetails"))
            const userEmail = userDetails.email;
            const resp = await fetch("http://localhost:3000/api/getFavourites")
            const data = await resp.json()
            const filterdData = data.recipes.filter((item) =>
              item.userEmail === userEmail
            )
            setLoading(false)
            setData(filterdData)
        }catch(err){
          setLoading(false)
          setErr(true)
        }
    }
    useEffect(()=>{fetchingData()}, [])
    
    const clickOnDeleteIcon = async(deleteId)=>{
      const updatedData = data.filter((recipe) => recipe._id !== deleteId)
      setData(updatedData)
      try{
        const respGetFavourites = await fetch("http://localhost:3000/api/getFavourites") // get all favourite recipes
        const respGetFavouritesData = await respGetFavourites.json()
        const  favouritesDataRecipe = respGetFavouritesData.recipes.filter((recipe) => recipe._id == deleteId)
        const title = favouritesDataRecipe[0].title
        const resp = await fetch("http://localhost:3000/getRecipes")
        const recipesData = await resp.json()
        const data = recipesData.recipesData
        const createdData = data.filter((recipe) => {return recipe.title === title})
        const id = createdData[0]._id
        const putOptions = {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ favourite: false }),
        };
        const editRecipe = await fetch(`http://localhost:3000/editRecipe/${id}`, putOptions); // edited  the favourite key in recipes data store through id
        const editRecipeResult = await editRecipe.json()
        console.log(editRecipeResult)
        const deleteOptions = {
          method: "DELETE",
          headers:{
            "Content-type": "application/json"
          }
        }
        
        const respDeleteFavourite = await fetch(`http://localhost:3000/api/favouriteRecipe/${deleteId}`, deleteOptions) // deleted the data from favourite recipes store
        const result = await respDeleteFavourite.json()
        // console.log(result)
        
      }catch(err){

      }
    }
  return (
    <FavouriteRecipesContainer>
      <Header />
      <Container>
      {loading && <ClipLoader color="#3498db" loading={loading} size={50} />}
      {data.length == 0 ? <>
          <EmptyDataHeading>No recipes are in favourites</EmptyDataHeading>
      
      </>
      : 
      <>
      {data.map((recipe) => {
          return(
            <RecipeItemcontainer backgroundColor = {backgroundColor} key = {recipe._id}>
              <RecipeImage src = {recipe.image} />
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <RecipeInfoContainer backgroundColor = {backgroundColor}>
                <Link to = {`/favouriteRecipe/${recipe._id}`}>
                <GetMoreButton>Get more</GetMoreButton>
                </Link>
                <DeleteIcon onClick = {() =>{clickOnDeleteIcon(recipe._id)}}>
                  <DeleteSweepIcon />
                </DeleteIcon>
              </RecipeInfoContainer>
            </RecipeItemcontainer>
          )
        })}
      </>
      }
      </Container>
    </FavouriteRecipesContainer>
  )
}

export default FavouritesRecipes