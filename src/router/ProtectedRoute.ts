import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@/hooks/reduxHooks";
import { ROUTES } from "@/utils/constants/routes";

export const ProtectedRoute = ({
    children,
    authRequired,
}: {
    children: ReactNode;
    authRequired: boolean;
}) => {
    const email = useAppSelector((state) => state.userSlice.email);
    const navigate = useNavigate();

    email && authRequired ? children : navigate(ROUTES.HOME, { replace: true });

    return children;
};
