import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "./features/DarkModeSlice";
import { proyectsApi } from "./services/proyectsAPI";

export const store = configureStore({
    reducer: {
        DarkModeSlice,
        [proyectsApi.reducerPath]: proyectsApi.reducer
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware().concat(
        proyectsApi.middleware,
    )
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;