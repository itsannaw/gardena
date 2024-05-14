import { Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useClickOutside from "@/hooks/useClickOutside";
import { useDebounce } from "@/hooks/useDebounce";
import { useNavigateSearch } from "@/hooks/useNavigateSearch";
import { useGetPlantBySearchQuery } from "@/store/api/plantsApi";
import { addSearchQuery } from "@/store/search/searchQueriesThunk";
import { USED_KEYS } from "@/utils/constants/events";
import { DEBOUNCE_TIMINGS, NOTIFICATIONS } from "@/utils/constants/general";
import { ROUTES, ROUTE_PARAMS } from "@/utils/constants/routes";

import { SearchResults } from "./SearchResults";

export const SearchInput = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.userSlice.id);
    const navigateSearch = useNavigateSearch();
    const [searchParams] = useSearchParams();
    const queryFromUrl = searchParams.get(ROUTE_PARAMS.QUERY) ?? "";
    const [query, setQuery] = useState(queryFromUrl);
    const debouncedQuery = useDebounce(query, DEBOUNCE_TIMINGS.SEARCH);
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);

    const { data, isLoading, error } = useGetPlantBySearchQuery(debouncedQuery);

    const handleSearch = () => {
        if (userId && query) {
            dispatch(addSearchQuery({ userId, query }))
                .unwrap()
                .then(() => {
                    navigateSearch(ROUTES.SEARCH_PLANTS, { [ROUTE_PARAMS.QUERY]: query });
                })
                .catch(() => {
                    alert("Failed to add search query");
                });
        }
    };

    useEffect(() => {
        setQuery(queryFromUrl);
    }, [queryFromUrl]);

    const handleKeyPress = (e: { key: string }) => {
        if (e.key === USED_KEYS.ENTER) {
            handleSearch();
        }
    };

    const handleOpen = () => {
        setIsVisible(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    useClickOutside(wrapperRef, handleClose);

    return (
        <div ref={wrapperRef} className="relative flex w-full max-w-sm items-center justify-center">
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
                onFocus={handleOpen}
            />
            {error && <p>{NOTIFICATIONS.ERROR}</p>}
            {data && isVisible && <SearchResults data={data} isLoading={isLoading} />}
        </div>
    );
};
