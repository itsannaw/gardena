import { Button, Tooltip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/utils/constants/routes";

export const FavouriteLinkButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ROUTES.FAVOURITE);
    };
    return (
        <Tooltip showArrow={true} content="Your favourite plants">
            <Button variant="light" isIconOnly onClick={handleClick}>
                <img className="h-6 w-6" src="/icons/heart.svg" alt="Favourite" />
            </Button>
        </Tooltip>
    );
};
