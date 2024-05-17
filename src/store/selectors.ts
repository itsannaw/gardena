import { RootState } from "@/store";

export const getUserId = (state: RootState) => state.userSlice.id;
export const getUserEmail = (state: RootState) => state.userSlice.email;

export const getUserFavourites = (state: RootState) => state.favouriteSlice.cardsId;