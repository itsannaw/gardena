import { Button, Tooltip } from "@nextui-org/react";

import { LogoutIcon } from "@/components/icons/LogoutIcon";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { logoutUser } from "@/store/user/userThunk";

export const LogoutButton = () => {
    const dispatch = useAppDispatch();

    return (
        <Tooltip showArrow={true} content="Logout">
            <Button variant="light" isIconOnly onClick={() => dispatch(logoutUser())}>
                <LogoutIcon className="stroke-black dark:stroke-white" />
            </Button>
        </Tooltip>
    );
};
