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
};

export type SearchInputType = {
    id: number;
    scientificName: string;
    defaultImage: {
        thumbnail: string;
    };
};
