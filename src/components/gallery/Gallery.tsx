import { Pagination } from "@nextui-org/react";
import { useState } from "react";

import useFetchUserFavourites from "@/hooks/useFetchUserFavourites";
import { useGetPlantsQuery } from "@/store/api/plantsApi";
import { CardType } from "@/types/ui";
import { NOTIFICATIONS } from "@/utils/constants/general";

import { CardComponent } from "../card/Card";
import { SearchInput } from "../inputs/search/SearchInput";
import { LinearLoading } from "../loading/LinearLoading";

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isLoading, error } = useGetPlantsQuery(currentPage);
    const { favouriteIds } = useFetchUserFavourites();

    return (
        <div id="gallery" className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-center text-2xl font-bold">Gallery</h2>
            <SearchInput />
            {error && <p>{NOTIFICATIONS.ERROR}</p>}
            {!isLoading && !error && (
                <div className="flex flex-wrap justify-center gap-8">
                    {data?.data?.map((card: CardType) => (
                        <CardComponent
                            key={card.id}
                            card={card}
                            liked={favouriteIds.includes(card.id)}
                        />
                    ))}
                    <Pagination
                        total={100}
                        color="default"
                        page={currentPage}
                        onChange={setCurrentPage}
                    />
                </div>
            )}
            {isLoading && <LinearLoading />}
        </div>
    );
};

export default Gallery;
