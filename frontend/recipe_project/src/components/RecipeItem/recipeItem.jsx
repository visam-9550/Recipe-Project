import React from 'react'
import {RecipeContainer, RecipeImage, RecipeDetailsContainer, TitleName, Time,ButtonContainer, GetDetailsButton} from "./styledComponents"
import EastIcon from '@mui/icons-material/East';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { IoIosHeart } from "react-icons/io";
import { getRecipeMiddleware } from '../middlewares/getRecipeMiddleware';
import { useDispatch, useSelector } from 'react-redux';
import individualRecipeSlice from '../Redux/Slices/individualRecipeItemSlice';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
const actions = individualRecipeSlice.actions

function RecipeItem(props) {
  const {time, title, coverImage, ingredients, process, id, favourite} = props
  
  const dispatch = useDispatch()
  const [isFavourite, setIsFavourite] = useState(favourite)
  const [data, setData] = useState({})

  const clickOnDeleteIcon = async(id) =>{
    try{
      const options = {
        method: "DELETE",
        header:{
          "Content-type": "application/json"
        }
      }
      const resp = await fetch(`http://localhost:3000/deleteRecipe/${id}`, options)
      const result = await resp.json()
      alert(result.message)
      console.log(result)
    }catch(err){
      console.log(err.message)
    }
  }
  const clickOnFavouriteIcon = async(id) =>{
    const resp = await fetch(`http://localhost:3000/getRecipe/${id}`)
    const data = await resp.json()
    const favouriteStatus = data.recipe.favourite
    // console.log({...data.recipe})
    const updateData = {username: data.recipe.username,
                           favourite : !favouriteStatus,
                           title: data.recipe.title,
                           time: data.recipe.time,
                           ingredients: data.recipe.ingredients,
                           process: data.recipe.process,
                           image: data.recipe.image
                        }
    const options = {
      method: "PUT",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify({favourite : !favouriteStatus})
    }
    const editResp = await fetch(`http://localhost:3000/editRecipe/${id}`, options)
    const editData = await editResp.json()
    const getDataResp = await fetch(`http://localhost:3000/getRecipe/${id}`)
    const getData = await getDataResp.json()
    setIsFavourite((prev) => !prev);
    console.log(getData)
    setData(getData)
    // console.log(!favouriteStatus)
  }
  const fecthingData = async()=>{
    try{
      const resp = await fetch(`http://localhost:3000/getRecipe/${id}`)
      const data = await resp.json()
      setData(data.recipe)
    }catch(err){

    }
  }
  useEffect(()=>{fecthingData()}, [setData])
  
  return (
    <RecipeContainer>
        <RecipeImage src = "https://th.bing.com/th/id/R.88d01af64d4c0624426545cad06e285f?rik=Cmpfy5pnFxrvxg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-gIrGN4pStT8%2fT5rkgRZuAWI%2fAAAAAAAAJ6k%2fek3wswron8w%2fs640%2fsweet%2bpotato%2bcurry.JPG&ehk=37%2faq4Wv27p7jucJSsEpH7roKd4Da52ly5zLQXTlGuc%3d&risl=&pid=ImgRaw&r=0" />
        <TitleName>{data.title}</TitleName>
        <RecipeDetailsContainer>
            <h4 onClick = {() =>{clickOnFavouriteIcon(id)}} >
            {isFavourite ? <IoIosHeart color="red" /> : <FavoriteBorderIcon />}
              {/* {data.favourite ? <IoIosHeart />:<FavoriteBorderIcon />} */}
            </h4>
            <Time>Duration: {data.time} min</Time>
            <DeleteSweepIcon onClick = {() => {clickOnDeleteIcon(id)}} />
        </RecipeDetailsContainer>
        <ButtonContainer>
          <Link to = {`recipe/${id}`}>
            <GetDetailsButton>Get Details</GetDetailsButton>
          </Link>
          
        </ButtonContainer>
        
    </RecipeContainer>
  )
}

export default RecipeItem