export type CardType = {
    id: number;
    common_name: string;
    scientific_name: string;
    cycle: string;
    default_image: {
        medium_url: string;
    };
};

export type CardComponentProps = {
    card: CardType;
};
