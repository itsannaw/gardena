import { Button, Tooltip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/utils/constants/routes";

export const HistoryLinkButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ROUTES.HISTORY);
    };

    return (
        <Tooltip showArrow={true} content="Your search history">
            <Button variant="light" isIconOnly onClick={handleClick}>
                <img className="h-6 w-6" src="/icons/book.svg" alt="History" />
            </Button>
        </Tooltip>
    );
};
