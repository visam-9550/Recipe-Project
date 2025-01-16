import React, { useState, useEffect } from 'react';
import Cookie from "js-cookie"
import {
  RecipeContainer,
  RecipeImage,
  RecipeDetailsContainer,
  TitleName,
  Time,
  ButtonContainer,
  GetDetailsButton,
  DeleteIcon,
  FavouriteIcon,
  SpanElement
} from './styledComponents';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { IoIosHeart } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from "react-router-dom"
import RecipeSlice from '../Redux/Slices/recipeSlice';

const actions = RecipeSlice.actions;

function RecipeItem(props) {
  const { id, favourite } = props;
  const getRecipesDataStates = useSelector((store) => store.getRecipesDataState)
  const {loading, error, recipesData} = getRecipesDataStates
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(favourite);
  const [data, setData] = useState(null); // Initialize as null
  

  const clickOnDeleteIcon = async (id) => {
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
        const updatedRecipesData = recipesData.filter((eachItem) => eachItem._id !== id);
        console.log(updatedRecipesData)
        dispatch(actions.getRecipesData(updatedRecipesData));
      } else {
        console.error('Error deleting the recipe:', result.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const clickOnFavouriteIcon = async (id) => {
    try {
      // const resp = await fetch(`http://localhost:3000/getRecipe/${id}`);
      // const data = await resp.json();

      const getResp = await fetch(`http://localhost:3000/getRecipe/${id}`);
      const getData = await getResp.json();
      const {title, time, ingredients, image, process} = getData.recipe
      const userDetails = JSON.parse(Cookie.get("userDetails"))
      const userEmail = userDetails.email;
      const dataToBePost = {
        userEmail: userEmail,
        title: title,
        process: process,
        ingredients: ingredients,
        time: time,
        image: image,
        favourite: true
      }
      const getAllFavouritesResp = await fetch("http://localhost:3000/api/getFavourites")
      const getAllFavouritesData = await getAllFavouritesResp.json()
      const isDataExist = getAllFavouritesData.recipes.some(
        (item) => item.title === dataToBePost.title && item.userEmail === dataToBePost.userEmail
      );
      if(isDataExist){
        alert("Recipe already favourited")
      }else{
        const options = {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(dataToBePost),
        };
        const resp = await fetch(`http://localhost:3000/api/addFavourites`, options); //post the data in favourite recipes store
        const data = await resp.json();
        console.log(data)
        const putOptions = {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ favourite: true }),
        };
        const editRecipe = await fetch(`http://localhost:3000/editRecipe/${id}`, putOptions); // edited  the favourite key in recipes data store through id
        const editRecipeResult = await editRecipe.json()
        alert("Is ok add to favourite recipes, See in favourites")
      }

      // console.log(editRecipeResult)
      // const createdData = recipesData.filter((recipe) => recipe._id !== id) // filtering the data after edited favourite
      // dispatch(actions.getRecipesData(createdData))
      
      
      // const editUpdatedDataResp = await fetch(`http://localhost:3000/editRecipe/${id}`, options); // get thae after edited the data through id
      // const editUpdatedData  = await  editUpdatedDataResp.json()
      // setIsFavourite((prev) => !prev);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchingData = async () => {
    try {
      const resp = await fetch(`http://localhost:3000/getRecipe/${id}`);
      const result = await resp.json();
      setData(result.recipe);
    } catch (err) {
      console.error('Error fetching recipe data:', err.message);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <RecipeContainer>
      <RecipeImage
        src={data.image || 'https://via.placeholder.com/150'}
        alt={data.title || 'Recipe Image'}
      />
      <TitleName>{data.title}</TitleName>
      <RecipeDetailsContainer>
        <FavouriteIcon onClick={() => clickOnFavouriteIcon(id)}>
          {isFavourite ? <IoIosHeart color="white" /> : <IoIosHeart color="white" />}
        </FavouriteIcon>
        <Time><SpanElement>Duration: </SpanElement>{data.time} min</Time>
        {/* <DeleteIcon>
          <DeleteSweepIcon onClick={() => clickOnDeleteIcon(id)} />
        </DeleteIcon> */}
      </RecipeDetailsContainer>
      <ButtonContainer>
        <Link to={`recipe/${id}`}>
          <GetDetailsButton>Get Details</GetDetailsButton>
        </Link>
      </ButtonContainer>
    </RecipeContainer>
  );
}

export default RecipeItem;
