import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import currentReducer from "./currentSlice";
import readReducer from "./readSlice"
import toReadReducer from "./toReadSlice";

const store = configureStore({
    reducer: {
        bookRed: bookReducer,
        currRed: currentReducer,
        readRed: readReducer,
        toReadRed: toReadReducer,
    }
})
export default store;