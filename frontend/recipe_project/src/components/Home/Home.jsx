import React from 'react'
import Cookies from 'js-cookie';
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import { Link, Navigate } from 'react-router-dom'
import Recipes from '../Recipes/recipes.jsx'
import MyRecipes from '../MyRecipes/MyRecipes.jsx';
import {HomeContainer, BannerContainer, BannerLeftContainer, BannerRightContainer, BannerTitle,BannerDescription, ShareRecipeButton, BannerImage, RecipesContainer} from "./styledComponents"


function Home() {
  const cookie = Cookies.get("userToken")
  // const user = Cookies.get("userDetails")
  // console.log(user)
  if(cookie === undefined){
    return <Navigate to = "/login" />
  }
  return (
    <>
      <HomeContainer>
        <Header />
        <BannerContainer>
          <BannerLeftContainer>
            <BannerTitle>
              Recipeault
            </BannerTitle>
            <BannerDescription>
            From vault to plate, every recipe matters.
            </BannerDescription>
            <Link to ="/addRecipe">
              <ShareRecipeButton>
                Share Recipe
              </ShareRecipeButton>
            </Link>
          </BannerLeftContainer>
          <BannerRightContainer>
            <BannerImage src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1734098704/pngtree-soju-and-sweet-rice-the-ultimate-recipe-for-korean-street-food-image_13166401-removebg-preview_bva8td.png"></BannerImage>
          </BannerRightContainer>
        </BannerContainer>
        </HomeContainer>
        <RecipesContainer>
          <Recipes/>
        </RecipesContainer>
        

    </>
  )
}

export default Home