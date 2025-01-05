import { createSlice } from "@reduxjs/toolkit";

const AddRecipeSlice = createSlice({
    name: "AddRecipeSlice",
    initialState:{
        title: "",
        time: "",
        ingredients: "",
        process: "",
        successMsg: "",
        errMsg: "",
        coverImage: ""
    },
    reducers:{
        setTitle:(state, action) =>{
            state.title = action.payload
        },
        setTime:(state, action) =>{
            state.time = action.payload
        },
        setProcess:(state, action) =>{
            state.process = action.payload
        },
        setIngredients:(state, action) =>{
            state.ingredients = action.payload
        },
        setSuccessMsg: (state, action) =>{
            state.successMsg = action.payload
        },
        setErrorMsg: (state, action) =>{
            state.errMsg = action.payload
        },
        setCoverImage: (state, action) =>{
            state.coverImage = action.payload
        }
    }
})

export default AddRecipeSlice;