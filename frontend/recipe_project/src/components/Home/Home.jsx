import React from 'react'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'
import { Link } from 'react-router-dom'
import Recipes from '../Recipes/recipes.jsx'
import {HomeContainer, BannerContainer, BannerLeftContainer, BannerRightContainer, BannerDescription, ShareRecipeButton, BannerImage, RecipesContainer} from "./styledComponents"


function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <BannerContainer>
          <BannerLeftContainer>
            <BannerDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel turpis purus. Praesent lorem dolor, finibus at sodales ac, vehicula et lacus. Morbi vitae est tempor, porttitor turpis tempus, commodo erat. Aenean ornare, leo ut scelerisque mattis, tortor est mattis quam, id mollis odio tellus ac metus. Donec porta sapien a auctor vehicula
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
        
        <Footer />

    </>
  )
}

export default Home