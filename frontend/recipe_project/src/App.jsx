import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage/loginPage'
import Home from './components/Home/Home';
import MyRecipes from './components/MyRecipes/MyRecipes';
import AddRecipe from './components/PostRecipe/addRecipe';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import RegisterPage from './components/Register/Register';
import OurMission from './components/OurMission/ourMission';
import FavouritesRecipes from './components/FavouriteRecipes/FavouritesRecipes';
import FavouriteRecipeDetails from './components/FavouriteRecipeDetails/FavouriteRecipeDetails';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Home></Home>} />
        <Route exact path = "/login" element = {<LoginPage></LoginPage>} />
        <Route exact path = "/myrecipes" element = {<MyRecipes></MyRecipes>} />
        <Route exact path = "/addRecipe" element = {<AddRecipe></AddRecipe>} />
        <Route exact path = "/recipe/:id" element = {<RecipeDetails></RecipeDetails>} />
        <Route exact path = "/register" element = {<RegisterPage></RegisterPage>} />
        <Route exact path = "/ourMission" element = {<OurMission></OurMission>} />
        <Route exact path = "/favouriteRecipes" element = {<FavouritesRecipes></FavouritesRecipes>} />
        <Route exact path = "/favouriteRecipe/:id" element = {<FavouriteRecipeDetails></FavouriteRecipeDetails>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;