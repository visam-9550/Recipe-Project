import { useSelector , useDispatch} from 'react-redux'
import RecipeSlice from '../Redux/Slices/recipeSlice.js'
const action = RecipeSlice.actions


export const fetchingAllRecipesData = async(dispatch) =>{
    try{
        dispatch(action.useLoading())
        const resp = await fetch("http://localhost:3000/getRecipes")
        const recipesData = await resp.json()
        dispatch(action.getRecipesData(recipesData.recipesData))
        
    }catch(err){
      dispatch(action.useError())
    } 
  }