import { Button, Tooltip } from "@nextui-org/react";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { logoutUser } from "@/store/user/userThunk";

export const LogoutButton = () => {
    const dispatch = useAppDispatch();

    return (
        <Tooltip showArrow={true} content="Logout">
            <Button variant="light" isIconOnly onClick={() => dispatch(logoutUser())}>
                <img className="h-6 w-6" src="/icons/logout.svg" alt="Logout" />
            </Button>
        </Tooltip>
    );
};
