import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDebounce } from "@/hooks/useDebounce";
import { useNavigateSearch } from "@/hooks/useNavigateSearch";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { useGetPlantBySearchQuery } from "@/store/api/plantsApi";
import { SearchInputType } from "@/types/ui";
import { ROUTES } from "@/utils/constants/routes";

import { SearchIcon } from "./SearchIcon";

export const SearchInput = () => {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);
    const { navigateWithParams } = useNavigateWithParams();
    const navigateSearch = useNavigateSearch();

    const { data, isLoading, error } = useGetPlantBySearchQuery(debouncedQuery);

    const handleSearch = () => {
        navigateSearch(ROUTES.SEARCH_PLANTS, { search: query });
    };

    const handleKeyPress = (e: { key: string }) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <>
            <Input
                className="relative max-w-sm"
                placeholder="Search plants"
                endContent={
                    <button onClick={handleSearch}>
                        <SearchIcon className="text-default-400" size={20} />
                    </button>
                }
                radius="full"
                variant="bordered"
                value={query}
                onKeyDown={handleKeyPress}
                onChange={(e) => setQuery(e.target.value)}
            />
            {query.length > 0 && data && (
                <div className="absolute top-[725px] z-20 flex max-h-[125px] w-full max-w-[370px] flex-col overflow-auto rounded-md border-2">
                    {error || data.total === 0 ? (
                        <span className="bg-white p-4 text-sm">No results found</span>
                    ) : isLoading ? (
                        <span className="bg-white p-4 text-sm">We're looking...</span>
                    ) : (
                        data.data.map((plant: SearchInputType) => (
                            <Link
                                key={plant.id}
                                onClick={() => {
                                    navigateWithParams(ROUTES.PLANT_DETAIL, {
                                        id: plant.id,
                                    });
                                }}
                                to={""}
                            >
                                <div className="flex items-center gap-3 border-b-2 bg-white px-3 py-2">
                                    <img
                                        className="h-5 w-5"
                                        src={
                                            plant.defaultImage?.thumbnail
                                                ? plant.defaultImage.thumbnail
                                                : "/gallery/missing_image.jpg"
                                        }
                                        alt="Plant"
                                    />
                                    <span>{plant.scientificName}</span>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            )}
        </>
    );
};
