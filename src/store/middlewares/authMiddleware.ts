/* eslint-disable no-console */
import { createListenerMiddleware } from "@reduxjs/toolkit";

import { removeUser, setUser } from "../user/userSlice";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: setUser,
    effect: (action) => {
        console.log(`Login as a user: ${action.payload.email}`);
    },
});

listenerMiddleware.startListening({
    actionCreator: removeUser,
    effect: () => {
        console.log("User Logout");
    },
});
