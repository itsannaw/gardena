import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchAllLikes, fetchLikeStatus, toggleLike } from "./likesThunk";

interface LikesState {
    likedCards: { [key: string]: boolean };
    loading: boolean;
    error: string | null;
}

const initialState: LikesState = {
    likedCards: {},
    loading: false,
    error: null,
};

const likesSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLikeStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchLikeStatus.fulfilled,
                (state, action: PayloadAction<{ cardId: string; liked: boolean }>) => {
                    const { cardId, liked } = action.payload;
                    state.likedCards[cardId] = liked;
                    state.loading = false;
                },
            )
            .addCase(fetchLikeStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            })
            .addCase(
                toggleLike.fulfilled,
                (state, action: PayloadAction<{ cardId: string; liked: boolean }>) => {
                    const { cardId, liked } = action.payload;
                    state.likedCards[cardId] = liked;
                },
            )
            .addCase(
                fetchAllLikes.fulfilled,
                (state, action: PayloadAction<{ cardId: string; liked: boolean }[]>) => {
                    action.payload.forEach(({ cardId, liked }) => {
                        state.likedCards[cardId] = liked;
                    });
                },
            );
    },
});

export default likesSlice.reducer;
