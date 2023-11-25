import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "./features/DarkModeSlice";
import { proyectsApi } from "./services/proyectsAPI";
import { pdfcvApi } from "./services/pdfcvAPI";

export const store = configureStore({
    reducer: {
        DarkModeSlice,
        [proyectsApi.reducerPath]: proyectsApi.reducer,
        [pdfcvApi.reducerPath]: pdfcvApi.reducer
        
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware().concat(
        proyectsApi.middleware,
        pdfcvApi.middleware,
    )
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;