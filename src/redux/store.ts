import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "./features/DarkModeSlice";

export const store = configureStore({
    reducer: {
        DarkModeSlice
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;