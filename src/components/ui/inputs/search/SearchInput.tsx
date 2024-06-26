import { Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchIcon } from "@/components/icons/SearchIcon";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useClickOutside from "@/hooks/useClickOutside";
import { useDebounce } from "@/hooks/useDebounce";
import { useNavigateSearch } from "@/hooks/useNavigateSearch";
import { useGetPlantBySearchQuery } from "@/store/api/plantsApi";
import { addSearchQuery } from "@/store/search/searchQueriesThunk";
import { getUserId } from "@/store/selectors";
import { USED_KEYS } from "@/utils/constants/events";
import { DEBOUNCE_TIMINGS } from "@/utils/constants/general";
import { ROUTES, ROUTE_PARAMS } from "@/utils/constants/routes";

import { SearchResults } from "./SearchResults";

export const SearchInput = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(getUserId);
    const navigateSearch = useNavigateSearch();
    const [searchParams] = useSearchParams();
    const queryFromUrl = searchParams.get(ROUTE_PARAMS.QUERY) ?? "";
    const [query, setQuery] = useState(queryFromUrl);
    const debouncedQuery = useDebounce(query, DEBOUNCE_TIMINGS.SEARCH);
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);

    const { data, isLoading, error } = useGetPlantBySearchQuery(debouncedQuery);

    const handleSearch = async () => {
        if (!query) return;

        if (userId) {
            try {
                await dispatch(addSearchQuery({ userId, query })).unwrap();
            } catch (error) {
                alert("Failed to add search query. Please try again.");
                return;
            }
        }

        navigateSearch(ROUTES.SEARCH_PLANTS, { [ROUTE_PARAMS.QUERY]: query });
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
                        <SearchIcon className="stroke-black dark:stroke-white" />
                    </button>
                }
                radius="full"
                variant="bordered"
                value={query}
                onKeyDown={handleKeyPress}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={handleOpen}
            />
            {data && isVisible && <SearchResults data={data} isLoading={isLoading} error={error} />}
        </div>
    );
};
