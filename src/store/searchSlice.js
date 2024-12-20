import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: "",
    warranty: false
}

const searchSlice = createSlice({
    initialState,
    name: "search",
    reducers: {
        handleSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        handleWarranty: (state, action) => {
            state.warranty = action.payload;
        }
    }
})

export const { handleSearchTerm, handleWarranty } = searchSlice.actions;

export default searchSlice.reducer;