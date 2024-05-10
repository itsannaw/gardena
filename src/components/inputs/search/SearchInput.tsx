import { Input } from "@nextui-org/react";
import { useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
import { useNavigateSearch } from "@/hooks/useNavigateSearch";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { useGetPlantBySearchQuery } from "@/store/api/plantsApi";
import { USED_KEYS } from "@/utils/constants/events";
import { DEBOUNCE_TIMINGS, NOTIFICATIONS } from "@/utils/constants/general";
import { ROUTES, ROUTE_PARAMS } from "@/utils/constants/routes";

import { SearchResults } from "./SearchResults";

export const SearchInput = () => {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, DEBOUNCE_TIMINGS.SEARCH);
    const { navigateWithParams } = useNavigateWithParams();
    const navigateSearch = useNavigateSearch();
    const [isVisible, setIsVisible] = useState(false);

    const { data, isLoading, error } = useGetPlantBySearchQuery(debouncedQuery);

    const handleSearch = () => {
        navigateSearch(ROUTES.SEARCH_PLANTS, { [ROUTE_PARAMS.QUERY]: query });
    };

    const handleKeyPress = (e: { key: string }) => {
        if (e.key === USED_KEYS.ENTER) {
            handleSearch();
        }
    };

    const handleInputFocus = () => {
        setIsVisible(true);
    };

    const handleInputBlur = () => {
        setIsVisible(false);
    };

    return (
        <div className="relative flex w-full max-w-sm items-center justify-center">
            <Input
                className="relative max-w-sm"
                placeholder="Search plants"
                endContent={
                    <button onClick={handleSearch}>
                        <img className="h-4 w-4" src="/icons/search.svg" alt="Search" />
                    </button>
                }
                radius="full"
                variant="bordered"
                value={query}
                onKeyDown={handleKeyPress}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            {error && <p>{NOTIFICATIONS.ERROR}</p>}
            {data && isVisible && (
                <SearchResults
                    data={data}
                    isLoading={isLoading}
                    navigateWithParams={navigateWithParams}
                />
            )}
        </div>
    );
};
