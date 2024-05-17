import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useDebounce } from "@/hooks/useDebounce";
import { useNavigateSearch } from "@/hooks/useNavigateSearch";
import { useGetPlantBySearchQuery } from "@/store/api/plantsApi";
import { addSearchQuery } from "@/store/search/searchQueriesThunk";
import { getUserId } from "@/store/selectors";
import { SearchResultsProps } from "@/types/ui";
import { DEBOUNCE_TIMINGS } from "@/utils/constants/general";
import { ROUTES, ROUTE_PARAMS } from "@/utils/constants/routes";

export const useSearchHandler = (query: string): SearchResultsProps => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(getUserId);
    const navigateSearch = useNavigateSearch();
    const debouncedQuery = useDebounce(query, DEBOUNCE_TIMINGS.SEARCH);
    const { data, isLoading, error } = useGetPlantBySearchQuery(debouncedQuery);

    const handleSearch = useCallback(async () => {
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
    }, [query, userId, dispatch, navigateSearch]);

    useEffect(() => {
        if (debouncedQuery) {
            handleSearch();
        }
    }, [debouncedQuery, handleSearch]);

    return { data, isLoading, error, handleSearch };
};
