import { Button } from "@nextui-org/react";

import { HeartIcon } from "@/components/icons/HeartIcon";
import { useToggleLike } from "@/hooks/useToggleLike";

import { SpinnerLoading } from "../../loading/SpinnerLoading";

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
    const { likeLoading, toggleLike } = useToggleLike();

    return (
        <Button
            isIconOnly
            className={`-translate-y-2 translate-x-2 text-default-900/60 data-[hover]:bg-foreground/10 ${className}`}
            radius="full"
            variant="light"
            onPress={() => toggleLike({ userId, cardId, liked })}
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
