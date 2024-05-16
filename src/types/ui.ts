import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type CardType = {
    id: number;
    commonName: string;
    scientificName: string;
    cycle: string;
    defaultImage: {
        mediumUrl: string;
    };
};

export type CardComponentProps = {
    card: CardType;
    liked: boolean;
};

export type SearchInputType = {
    id: number;
    scientificName: string;
    defaultImage: {
        thumbnail: string;
    };
};

export interface SearchResultsProps {
    data: { total: number; data: SearchInputType[] } | null;
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
}

export interface DeleteHistoryButtonProps {
    onDelete: () => void;
}
