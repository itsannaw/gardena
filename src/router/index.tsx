import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { ErrorPage, HomePage, SignInPage, SignUpPage } from "@/pages";
import { ROUTES } from "@/utils/constants/routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage />,
            },
            {
                path: ROUTES.LOGIN,
                element: <SignInPage />,
            },
            {
                path: ROUTES.SIGNUP,
                element: <SignUpPage />,
            },
        ],
    },
]);
