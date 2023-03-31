import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    toRead_reading: []
}
const toReadSlice = createSlice({
    name: "toReadBooks",
    initialState,
    reducers: {
        addToToRead(state, actions) {
            const newBook = actions.payload;
            const existingBooks = state.toRead_reading.find(item => item.id === newBook.id);
            if (!existingBooks) {
                state.toRead_reading.push({
                    img: newBook.img,
                    id: newBook.id,
                    name: newBook.name,
                    author: newBook.author,
                })
            } else { alert("Already added to reading books") };
        },
        removeBook(state, actions) {
            const newId = actions.payload;
            state.toRead_reading = state.toRead_reading.filter(ele => ele.id !== newId)
        }

    }
})
export const toReadActions = toReadSlice.actions;
export default toReadSlice.reducer;
