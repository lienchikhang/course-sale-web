import { configureStore } from "@reduxjs/toolkit";
import { pageSlice } from "./slices";

const store = configureStore({
    reducer: {
        pages: pageSlice,
    }
})

export default store;