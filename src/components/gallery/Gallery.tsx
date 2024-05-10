import { Pagination } from "@nextui-org/react";
import { useState } from "react";

import { useGetPlantsQuery } from "@/store/api/plantsApi";
import { CardType } from "@/types/ui";

import { CardComponent } from "../card/Card";
import { SearchInput } from "../inputs/search/SearchInput";
import { LinearLoading } from "../loading/LinearLoading";

export const Gallery = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { data, isLoading, error } = useGetPlantsQuery(currentPage);

    return (
        <div id="gallery" className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-center text-2xl font-bold">Gallery</h2>
            <SearchInput />
            <div className="flex flex-wrap justify-center gap-8">
                {error && <p>Oops...</p>}
                {isLoading ? (
                    <LinearLoading />
                ) : (
                    <>
                        {data?.data?.map((card: CardType) => (
                            <CardComponent key={card.id} card={card} />
                        ))}
                        <Pagination
                            total={100}
                            color="default"
                            page={currentPage}
                            onChange={setCurrentPage}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
