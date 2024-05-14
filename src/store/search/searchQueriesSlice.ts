import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SearchQuery, SearchQueriesState } from "@/types/general";

import {
    addSearchQuery,
    fetchUserSearchQueries,
    deleteSearchQuery,
    deleteAllSearchQueries,
} from "./searchQueriesThunk";

const initialState: SearchQueriesState = {
    queries: [],
    status: "idle",
    error: null,
};

const searchQueriesSlice = createSlice({
    name: "searchQueries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addSearchQuery.fulfilled, (state, action: PayloadAction<SearchQuery>) => {
                state.queries.push(action.payload);
            })
            .addCase(
                fetchUserSearchQueries.fulfilled,
                (state, action: PayloadAction<SearchQuery[]>) => {
                    state.queries = action.payload;
                    state.status = "succeeded";
                },
            )
            .addCase(fetchUserSearchQueries.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserSearchQueries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            })
            .addCase(deleteSearchQuery.fulfilled, (state, action: PayloadAction<string>) => {
                state.queries = state.queries.filter((query) => query.id !== action.payload);
            })
            .addCase(deleteAllSearchQueries.fulfilled, (state) => {
                state.queries = [];
            });
    },
});

export default searchQueriesSlice.reducer;
