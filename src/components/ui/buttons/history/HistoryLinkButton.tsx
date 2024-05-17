import { Button, Tooltip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { BookIcon } from "@/components/icons/BookIcon";
import { ROUTES } from "@/utils/constants/routes";

export const HistoryLinkButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ROUTES.HISTORY);
    };

    return (
        <Tooltip showArrow={true} content="Your search history">
            <Button variant="light" isIconOnly onClick={handleClick}>
                <BookIcon className="stroke-black dark:stroke-white" />
            </Button>
        </Tooltip>
    );
};
