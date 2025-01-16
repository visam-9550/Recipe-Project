import { useSelector , useDispatch} from 'react-redux'
import RecipeSlice from '../Redux/Slices/recipeSlice.js'
import Cookie from "js-cookie"
const action = RecipeSlice.actions


export const fetchingAllRecipesData = async(dispatch) =>{
    try{
        const userDetails = JSON.parse(Cookie.get("userDetails"))
        
        const userEmail = userDetails.email;
        dispatch(action.useLoading())
        const resp = await fetch("http://localhost:3000/getRecipes")
        const recipesData = await resp.json()
        const data = recipesData.recipesData
        
        const createdData = data.filter((recipe) => {return recipe.username != userEmail})
       
        dispatch(action.getRecipesData(createdData))
        
    }catch(err){
      dispatch(action.useError())
    } 
  }