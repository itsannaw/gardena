import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: string | null;
    email: string | null;
}

interface UserData {
    id: string;
    email: string | null;
}

const initialState: UserState = {
    id: null,
    email: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserData>) {
            state.id = action.payload.id;
            state.email = action.payload.email;
        },
        removeUser(state) {
            state.id = null;
            state.email = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
