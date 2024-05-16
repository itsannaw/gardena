import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { deleteAllFavourite } from "@/store/favourite/favouriteThunk";

export const DeleteAllFavouriteButton = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.userSlice.id);

    const handleDelete = (userId: string) => {
        if (userId) {
            dispatch(deleteAllFavourite(userId));
        }
    };

    return (
        <button className="text-red-500" onClick={() => handleDelete(userId || "")}>
            Delete All
        </button>
    );
};
