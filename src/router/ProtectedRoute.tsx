import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@/hooks/reduxHooks";
import { getUserEmail } from "@/store/selectors";
import { ROUTES } from "@/utils/constants/routes";

export const ProtectedRoute = ({
    children,
    authRequired,
}: {
    children: ReactNode;
    authRequired: boolean;
}) => {
    const email = useAppSelector(getUserEmail);
    const navigate = useNavigate();

    useEffect(() => {
        if ((!email && authRequired) || (email && !authRequired)) {
            navigate(ROUTES.HOME, { replace: true });
        }
    }, [email, authRequired, navigate]);

    return <>{children}</>;
};
