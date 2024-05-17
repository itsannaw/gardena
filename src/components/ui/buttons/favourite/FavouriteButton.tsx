import { Button } from "@nextui-org/react";
import { PressEvent } from "@react-types/shared";

import { HeartIcon } from "@/components/icons/HeartIcon";
import { useToggleLike } from "@/hooks/useToggleLike";
import { propsFavouriteButton } from "@/types/ui";

import { SpinnerLoading } from "../../loading/SpinnerLoading";

export const FavouriteButton = ({
    className,
    liked,
    cardId,
    userId,
    onLike,
}: propsFavouriteButton) => {
    const { likeLoading, toggleLike } = useToggleLike();

    return (
        <Button
            isIconOnly
            className={`-translate-y-2 translate-x-2 text-default-900/60 data-[hover]:bg-foreground/10 ${className}`}
            radius="full"
            variant="light"
            onPress={async (e: PressEvent) => {
                await toggleLike({ userId, cardId, liked });
                if (onLike) {
                    onLike(e, { userId, cardId, liked: !liked });
                }
            }}
        >
            {likeLoading ? (
                <SpinnerLoading />
            ) : (
                <HeartIcon
                    className={liked ? "[&>path]:stroke-transparent" : ""}
                    fill={liked ? "black" : "none"}
                />
            )}
        </Button>
    );
};
