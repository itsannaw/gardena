import { useState } from "react";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { addFavourite, deleteFavourite } from "@/store/favourite/favouriteThunk";
import { propsUseToggleLike } from "@/types/hooks";

export const useToggleLike = () => {
    const dispatch = useAppDispatch();
    const [likeLoading, setLikeLoading] = useState(false);

    const toggleLike = async ({ userId, cardId, liked }: propsUseToggleLike) => {
        if (likeLoading) return;
        setLikeLoading(true);
        try {
            if (liked) {
                await dispatch(deleteFavourite({ userId, cardId })).unwrap();
            } else {
                await dispatch(addFavourite({ userId, cardId })).unwrap();
            }
        } catch (error) {
            alert("Failed to toggle favourite!");
        } finally {
            setLikeLoading(false);
        }
    };

    return { likeLoading, toggleLike };
};
