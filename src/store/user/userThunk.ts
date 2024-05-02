import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "@/services/firebase";
import { removeUser, setUser } from "@/store/user/userSlice";
import { AuthData } from "@/types/auth";

export const loginUser = createAsyncThunk(
    "user/login",
    async ({ email, password }: AuthData, { dispatch }) => {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        dispatch(
            setUser({
                id: user.uid,
                email: user.email,
            }),
        );
        return user.uid;
    },
);

export const registerUser = createAsyncThunk(
    "user/register",
    async ({ email, password }: AuthData, { dispatch }) => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(
            setUser({
                id: user.uid,
                email: user.email,
            }),
        );
        return user.uid;
    },
);

export const logoutUser = createAsyncThunk("user/logout", async (_, { dispatch }) => {
    await signOut(auth);
    dispatch(removeUser());
});
