import { createSlice} from "@reduxjs/toolkit";

const individualRecipeSlice = createSlice({
    name: "individualRecipe",
    initialState:{
        loading: true,
        error: false,
        recipe: {},
        id: null
    },
    reducers:{
        recipeLoading: (state) => {
            state.loading =true,
            state.error = false
        },
        recipeError: (state) =>{
            state.loading = false,
            state.error = true
        },
        recipeData:(state, action) =>{
            state.loading = false,
            state.recipe = action.payload
        },
        recipeId: (state, action) =>{
            state.id = action.payload
        }

    }
})

export default individualRecipeSlice;