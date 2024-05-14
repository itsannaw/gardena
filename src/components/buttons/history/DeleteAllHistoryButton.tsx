import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { deleteAllSearchQueries } from "@/store/search/searchQueriesThunk";

export const DeleteAllHistoryButton = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.userSlice.id);

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
