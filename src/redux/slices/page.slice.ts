import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'pages',
    initialState: {
        activePage: 'home'
    },
    reducers: {
        updateActivePage: (state, action) => {
            state.activePage = action.payload;
        }
    }
})

export const { updateActivePage } = pageSlice.actions;
export default pageSlice.reducer;