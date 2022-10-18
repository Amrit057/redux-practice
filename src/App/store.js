import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/Counter/counterSlice'
import themeReducer from '../features/Theme/themeSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
    },
})