import { createSlice } from "@reduxjs/toolkit";
import { readSavedLocalStorage } from "./localStorage";

export const savedSlice = createSlice({
    name: 'saved',
    initialState:{
        savedItems: readSavedLocalStorage(),
    },
    reducers: {
        setSaved: (state, action) =>{
            state.savedItems = action.payload;
        }
    }
})

export const getSaved = (state) => state.saved.savedItems;

export const {setSaved} = savedSlice.actions;
export default savedSlice.reducer;