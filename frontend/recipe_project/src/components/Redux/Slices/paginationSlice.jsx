import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
    name: "Pagination",
    initialState:{
        pageNumber: 1,
        pageLength: 4,
        startIndex: 0,
        endIndex: 4,
        totalPages: null
    },
    reducers:{
        setStartIndex: (state, action)=>{
            state.startIndex = action.payload 
        },
        setEndIndex: (state, action) =>{
            state.endIndex = action.payload
        },
        setPageNumber: (state, action) =>{
            state.pageNumber = action.payload
        },
        setTotalPages: (state, action) =>{
            state.totalPages = action.payload
        }
    }
})

export default PaginationSlice;