import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: "", //statename with initial value
}

export const themeSlice = createSlice({
    name: 'theme', //name to identify slice
    initialState,
    reducers: {
        changeTextColor: (state, action) => {
            state.color = action.payload
        },
    },
})

export const {changeTextColor} = themeSlice.actions

export default themeSlice.reducer

