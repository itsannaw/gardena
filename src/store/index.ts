import { configureStore } from "@reduxjs/toolkit";

import userSlice from "@/store/user/userSlice";

import { plantsApi } from "./api/plantsApi";

export const store = configureStore({
    reducer: {
        userSlice,
        [plantsApi.reducerPath]: plantsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(plantsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;