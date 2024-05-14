import { configureStore } from "@reduxjs/toolkit";

import searchQueriesSlice from "@/store/search/searchQueriesSlice";
import userSlice from "@/store/user/userSlice";

import { plantsApi } from "./api/plantsApi";

export const store = configureStore({
    reducer: {
        userSlice,
        searchQueriesSlice,
        [plantsApi.reducerPath]: plantsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(plantsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
