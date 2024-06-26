import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchUserFavourite } from "@/store/favourite/favouriteThunk";
import { getUserFavourites } from "@/store/selectors";
import { getUserId } from "@/store/selectors";

import { useAppDispatch, useAppSelector } from "./reduxHooks";

const useFetchUserFavourites = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(getUserId);
    const userFavourites = useAppSelector(getUserFavourites);
    const [loading, setLoading] = useState<boolean>(false);

    const favouriteIds = useMemo(
        () => userFavourites.map((fav) => parseInt(fav.cardId)),
        [userFavourites],
    );

    const fetchFavourites = useCallback(async () => {
        if (!userId) return;
        setLoading(true);
        try {
            if (userId) {
                await dispatch(fetchUserFavourite(userId)).unwrap();
            }
        } catch (error) {
            alert("Failed to fetch user favourites...");
        } finally {
            setLoading(false);
        }
    }, [dispatch, userId]);

    useEffect(() => {
        fetchFavourites();
    }, [fetchFavourites]);

    return { favouriteIds, loading };
};

export default useFetchUserFavourites;
