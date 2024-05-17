import { PressEvent } from "@react-types/shared";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { propsUseToggleLike } from "./hooks";

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
    onLike?: (event: PressEvent, payload: propsUseToggleLike) => void | Promise<void>;
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
    handleSearch?: () => void;
}

export interface DeleteHistoryButtonProps {
    onDelete: () => void;
}

export interface propsFavouriteButton {
    className?: string;
    liked: boolean;
    cardId: string;
    userId: string;
    onLike?: (event: PressEvent, payload: propsUseToggleLike) => void | Promise<void>;
}
