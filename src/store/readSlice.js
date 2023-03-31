import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    read_reading: []
}
const readSlice = createSlice({
    name: "readBooks",
    initialState,
    reducers: {
        addToRead(state, actions) {
            const newBook = actions.payload;
            const existingBooks = state.read_reading.find(item => item.id === newBook.id);
            if (!existingBooks) {
                state.read_reading.push({
                    img: newBook.img,
                    id: newBook.id,
                    name: newBook.name,
                    author: newBook.author,
                })
            } else { alert("Already added to read books") };
        },
        removeBook(state, actions) {
            const newId = actions.payload;
            state.read_reading = state.read_reading.filter(ele => ele.id !== newId)
        }

    }
})
export const readActions = readSlice.actions;
export default readSlice.reducer;
