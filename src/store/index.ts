import { configureStore } from "@reduxjs/toolkit";

import userSlice from "@/store/user/userSlice";

export const store = configureStore({
    reducer: {
        userSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
