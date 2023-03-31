import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../components/Data/Data";

const initialState = {
    DUMMY_BOOKS: Data,
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        search(state, action) {
            let value = action.payload.toLowerCase();
            if (value === "") {
                state.DUMMY_BOOKS = Data;
            } else {
                state.DUMMY_BOOKS = Data.filter(ele => ele.name.toLowerCase().includes(value));
            }
        },
    },
});

export const bookActions = bookSlice.actions;
export default bookSlice.reducer;
