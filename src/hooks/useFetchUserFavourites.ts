import { useEffect, useMemo } from "react";

import { fetchUserFavourite } from "@/store/favourite/favouriteThunk";

import { useAppDispatch, useAppSelector } from "./reduxHooks";

const useFetchUserFavourites = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.userSlice.id);
    const userFavourites = useAppSelector((state) => state.favouriteSlice.cardsId);
    const favouriteIds = useMemo(
        () => userFavourites.map((fav) => parseInt(fav.cardId)),
        [userFavourites],
    );

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                if (userId) {
                    await dispatch(fetchUserFavourite(userId)).unwrap();
                }
            } catch (error) {
                alert("Failed to fetch user favourites...");
            }
        };
        fetchFavourites();
    }, [dispatch, userId]);

    return { favouriteIds };
};

export default useFetchUserFavourites;
