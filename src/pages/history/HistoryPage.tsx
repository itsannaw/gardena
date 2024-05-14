import { useEffect, useMemo } from "react";

import { DeleteAllHistoryButton } from "@/components/buttons/history/DeleteAllHistoryButton";
import { DeleteHistoryButton } from "@/components/buttons/history/DeleteHistoryButton";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useNavigateSearch } from "@/hooks/useNavigateSearch";
import { deleteSearchQuery, fetchUserSearchQueries } from "@/store/search/searchQueriesThunk";
import { ROUTES, ROUTE_PARAMS } from "@/utils/constants/routes";
import { formatTimestamp } from "@/utils/helpers/converts";

const HistoryPage = () => {
    const dispatch = useAppDispatch();
    const { queries, status, error } = useAppSelector((state) => state.searchQueriesSlice);
    const userId = useAppSelector((state) => state.userSlice.id);
    const navigateSearch = useNavigateSearch();

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserSearchQueries(userId));
        }
    }, [userId, dispatch]);

    const sortedHistory = useMemo(() => {
        return [...queries].sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
    }, [queries]);

    const handleDelete = (queryId: string) => {
        if (userId) {
            dispatch(deleteSearchQuery({ userId, queryId }));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-center text-2xl font-bold">Search History</h2>
            {status === "loading" && <div>Loading...</div>}
            {status === "failed" && <div>Error: {error}</div>}
            {status === "succeeded" && (
                <>
                    {!queries.length ? (
                        <span>You don't have any search stories yet!</span>
                    ) : (
                        <>
                            <div className="flex w-full justify-end">
                                <DeleteAllHistoryButton />
                            </div>
                            <div className="max-h-[600px] w-full max-w-[500px] overflow-y-auto">
                                <table
                                    className="w-full table-auto text-center"
                                    aria-label="Table of search history"
                                >
                                    <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th className="px-5 py-2">Query</th>
                                            <th className="px-5 py-2 text-center">Timestamp</th>
                                            <th className="px-5 py-2 text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedHistory.map((item) => (
                                            <tr key={item.id}>
                                                <td className="w-[190px] rounded-lg border px-4 py-2 font-medium">
                                                    <button
                                                        onClick={() => {
                                                            navigateSearch(ROUTES.SEARCH_PLANTS, {
                                                                [ROUTE_PARAMS.QUERY]: item.query,
                                                            });
                                                        }}
                                                    >
                                                        {item.query}
                                                    </button>
                                                </td>
                                                <td className="rounded-lg border px-4 py-2 text-center">
                                                    {formatTimestamp(item.timestamp)}
                                                </td>
                                                <td className="rounded-lg border px-4 py-2">
                                                    <DeleteHistoryButton
                                                        onDelete={() => handleDelete(item.id)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default HistoryPage;
