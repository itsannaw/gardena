import { Button } from "@nextui-org/react";

import { SpinnerLoading } from "@/components/loading/SpinnerLoading";
import { useToggleLike } from "@/hooks/useToggleLike";

import { HeartIcon } from "../../icons/HeartIcon";

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
