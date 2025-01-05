import {configureStore} from "@reduxjs/toolkit"
import RecipeSlice from "../Slices/recipeSlice"
import individualRecipeSlice from "../Slices/individualRecipeItemSlice";
import AddRecipeSlice from "../Slices/addRecipeSlice";

const store = configureStore({
    reducer:{
        getRecipesDataState:  RecipeSlice.reducer,
        getRecipeDataState: individualRecipeSlice.reducer,
        addRecipeState: AddRecipeSlice.reducer
    }
})

export default store;
