import { createSlice } from "@reduxjs/toolkit";

export const DarkModeSlice = createSlice({
    name: "darkMode",
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const {toggleDarkMode} = DarkModeSlice.actions;
export default DarkModeSlice.reducer;