import { configureStore } from "@reduxjs/toolkit";

import favouriteSlice from "@/store/favourite/favouriteSlice";
import searchQueriesSlice from "@/store/search/searchQueriesSlice";
import userSlice from "@/store/user/userSlice";

import { plantsApi } from "./api/plantsApi";
import { listenerMiddleware } from "./middlewares/authMiddleware";

export const store = configureStore({
    reducer: {
        userSlice,
        searchQueriesSlice,
        favouriteSlice,
        [plantsApi.reducerPath]: plantsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(plantsApi.middleware, listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
