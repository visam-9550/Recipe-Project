import { createSlice } from "@reduxjs/toolkit";

const EditSlice = createSlice({
    name: "EditSliceState",
    initialState:{
        editStatus: false,
        editId: ""
    },
    reducers:{
        setEditStatus: (state, action) =>{
            state.editStatus = action.payload
        },
        setEditId:(state, action) =>{
            state.editId = action.payload
        }
    }
})

export default EditSlice;