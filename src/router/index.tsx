import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { ROUTES } from "../const/routes";
import { ErrorPage, HomePage, SignInPage, SignUpPage } from "../pages";

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
