import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 10, //statename with initial value
}

export const counterSlice = createSlice({
    name: 'counter', //name to identify slice
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer

