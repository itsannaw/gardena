import { Timestamp } from "firebase/firestore";

export interface SearchQuery {
    id: string;
    query: string;
    timestamp: Timestamp;
}

export interface SearchQueriesState {
    queries: SearchQuery[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export interface Favourite {
    id: string;
    cardId: string;
}

export interface FavouriteState {
    cardsId: Favourite[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
