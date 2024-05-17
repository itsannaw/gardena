import { Button, Tooltip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { FavouriteIcon } from "@/components/icons/FavouriteIcon";
import { ROUTES } from "@/utils/constants/routes";

export const FavouriteLinkButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ROUTES.FAVOURITE);
    };
    return (
        <Tooltip showArrow={true} content="Your favourite plants">
            <Button variant="light" isIconOnly onClick={handleClick}>
                <FavouriteIcon className="stroke-black dark:stroke-white" />
            </Button>
        </Tooltip>
    );
};
