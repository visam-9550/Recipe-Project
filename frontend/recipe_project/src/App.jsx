import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './components/loginpage/loginPage'
import Home from './components/Home/Home';
import LogoutPage from './components/LogoutPage/logoutPage';
import AddRecipe from './components/PostRecipe/addRecipe';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Home></Home>} />
        <Route exact path = "/login" element = {<LoginPage></LoginPage>} />
        <Route exact path = "/logout" element = {<LogoutPage></LogoutPage>} />
        <Route exact path = "/addRecipe" element = {<AddRecipe></AddRecipe>} />
        <Route exact path = "/recipe/:id" element = {<RecipeDetails></RecipeDetails>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;