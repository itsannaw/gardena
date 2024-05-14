import { useSearchParams } from "react-router-dom";

import { useGetPlantBySearchQuery } from "@/store/api/plantsApi";
import { CardType } from "@/types/ui";

import { CardComponent } from "../card/Card";
import { SearchInput } from "../inputs/search/SearchInput";
import { LinearLoading } from "../loading/LinearLoading";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";

    const { data, isLoading, error } = useGetPlantBySearchQuery(query);

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-center text-2xl font-bold">Search result by query "{query}"</h2>
            {isLoading && <LinearLoading />}
            {!isLoading && data && (
                <>
                    <SearchInput />
                    {data.total === 0 && <p>No results found</p>}
                    <div className="flex flex-wrap justify-center gap-8">
                        {data.data.map((card: CardType) => (
                            <CardComponent key={card.id} card={card} />
                        ))}
                    </div>
                </>
            )}
            {error && <p>Something went wrong. Do it again later!</p>}
        </div>
    );
};
