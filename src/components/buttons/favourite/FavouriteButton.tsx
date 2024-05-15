import { Button } from "@nextui-org/react";
import { useState } from "react";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { addFavourite, deleteFavourite } from "@/store/favourite/favouriteThunk";

import { HeartIcon } from "./HeartIcon";

export const FavouriteButton = ({
    className,
    liked,
    cardId,
    userId,
}: {
    className?: string;
    liked: boolean;
    cardId: string;
    userId: string;
}) => {
    const dispatch = useAppDispatch();
    const [likeLoading, setLikeLoading] = useState(false);

    const onToggleLike = async () => {
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

    return (
        <Button
            isIconOnly
            className={`-translate-y-2 translate-x-2 text-default-900/60 data-[hover]:bg-foreground/10 ${className}`}
            radius="full"
            variant="light"
            onPress={onToggleLike}
        >
            <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "black" : "none"}
            />
        </Button>
    );
};
