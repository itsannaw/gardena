import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { deleteAllSearchQueries } from "@/store/search/searchQueriesThunk";
import { getUserId } from "@/store/selectors";

export const DeleteAllHistoryButton = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(getUserId);

    const handleDelete = (userId: string) => {
        if (userId) {
            dispatch(deleteAllSearchQueries(userId));
        }
    };

    return (
        <button className="text-red-500" onClick={() => handleDelete(userId || "")}>
            Delete All
        </button>
    );
};
