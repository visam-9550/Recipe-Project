import { useDispatch, useSelector } from "react-redux"
import RecipeSlice from "../Redux/Slices/recipeSlice"
import store from "../Redux/store/store"
const actions = RecipeSlice.actions

export const getRecipeMiddleware = async(dispatch) =>{
    
    try{
        const getRecipeState = useSelector((store) => store.getRecipeDataState)
        const {id} = getRecipeState
        console.log("id")
        const resp = await fetch()
    }catch(err){

    }
}

