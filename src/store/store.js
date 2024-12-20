import { configureStore } from "@reduxjs/toolkit";
import searchreducer from "./searchSlice.js"
export const store = configureStore({
    reducer: searchreducer,
});