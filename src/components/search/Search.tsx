import { useSearchParams } from "react-router-dom";

import { useGetPlantBySearchQuery } from "@/store/api/plantsApi";
import { CardType } from "@/types/ui";

import { CardComponent } from "../card/Card";
import { SearchInput } from "../inputs/search/SearchInput";
import { LinearLoading } from "../loading/LinearLoading";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") ?? "";

    const { data, isLoading, error } = useGetPlantBySearchQuery(search);

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-center text-2xl font-bold">Search</h2>
            <SearchInput />
            {error && <p>Oops...</p>}
            {data?.total === 0 && <p>No results found</p>}
            {isLoading ? (
                <LinearLoading />
            ) : (
                <div className="flex flex-wrap justify-center gap-8">
                    {data?.data?.map((card: CardType) => (
                        <CardComponent key={card.id} card={card} />
                    ))}
                </div>
            )}
        </div>
    );
};
