import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    current_reading: []
}
const currentSlice = createSlice({
    name: "currBooks",
    initialState,
    reducers: {
        addToCurrent(state, actions) {
            const newBook = actions.payload;

            const existingBooks = state.current_reading.find(item => item.id === newBook.id);
            if (!existingBooks) {
                state.current_reading.push({
                    img: newBook.img,
                    id: newBook.id,
                    name: newBook.name,
                    author: newBook.author,
                })
            } else { alert("Already added to currently reading books") };
        },
        removeBook(state, actions) {
            const newId = actions.payload;
            state.current_reading = state.current_reading.filter(ele => ele.id !== newId)
        }

    }
})
export const currentActions = currentSlice.actions;
export default currentSlice.reducer;
