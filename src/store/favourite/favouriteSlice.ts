import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Favourite, FavouriteState } from "@/types/general";

import {
    addFavourite,
    deleteAllFavourite,
    deleteFavourite,
    fetchUserFavourite,
} from "./favouriteThunk";

const initialState: FavouriteState = {
    cardsId: [],
    status: "idle",
    error: null,
};

const FavouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addFavourite.fulfilled, (state, action: PayloadAction<Favourite>) => {
                state.cardsId.push(action.payload);
            })
            .addCase(fetchUserFavourite.fulfilled, (state, action: PayloadAction<Favourite[]>) => {
                state.cardsId = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchUserFavourite.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserFavourite.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            })
            .addCase(deleteFavourite.fulfilled, (state, action: PayloadAction<string>) => {
                state.cardsId = state.cardsId.filter((query) => query.cardId !== action.payload);
            })
            .addCase(deleteAllFavourite.fulfilled, (state) => {
                state.cardsId = [];
            });
    },
});

export default FavouriteSlice.reducer;
