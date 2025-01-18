import {configureStore} from "@reduxjs/toolkit"
import RecipeSlice from "../Slices/recipeSlice"
import individualRecipeSlice from "../Slices/individualRecipeItemSlice";
import AddRecipeSlice from "../Slices/addRecipeSlice";
import EditSlice from "../Slices/editRecipeSlice";
import PaginationSlice from "../Slices/paginationSlice";

const Store = configureStore({
    reducer:{
        getRecipesDataState:  RecipeSlice.reducer,
        getRecipeDataState: individualRecipeSlice.reducer,
        addRecipeState: AddRecipeSlice.reducer,
        editSliceState: EditSlice.reducer,
        paginationState: PaginationSlice.reducer

    }
})

export default Store;
