import { Button } from "@nextui-org/react";
import { useState } from "react";

import { HeartIcon } from "./HeartIcon";

export const LikeButton = ({ className }: { className?: string }) => {
    const [liked, setLiked] = useState(false);

    return (
        <Button
            isIconOnly
            className={`-translate-y-2 translate-x-2 text-default-900/60 data-[hover]:bg-foreground/10 ${className}`}
            radius="full"
            variant="light"
            onPress={() => setLiked((v) => !v)}
        >
            <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "black" : "none"}
            />
        </Button>
    );
};
