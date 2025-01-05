import {createSlice} from "@reduxjs/toolkit"

const RecipeSlice = createSlice({
    name: "recipeSlice",
    initialState:{
        recipesData: [],
        loading: true,
        error: false
    },
    reducers:{
        getRecipesData:(state, action) =>{
            state.loading = false,
            state.recipesData = action.payload
        },
        useLoading: (state) =>{
            state.loading= true,
            state.error = false
        },
        useError:(state) =>{
            state.loading = false,
            state.error = true
        }
    }
})

export default RecipeSlice;