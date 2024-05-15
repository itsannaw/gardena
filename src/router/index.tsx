import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import {
    ErrorPage,
    HistoryPage,
    HomePage,
    PlantDetailPage,
    SearchPage,
    SignInPage,
    SignUpPage,
} from "@/pages";
import { ROUTES } from "@/utils/constants/routes";

import { ProtectedRoute } from "./ProtectedRoute";

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
                element: (
                    <ProtectedRoute authRequired={false}>
                        <SignInPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: ROUTES.SIGNUP,
                element: (
                    <ProtectedRoute authRequired={false}>
                        <SignUpPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: ROUTES.PLANT_DETAIL,
                element: <PlantDetailPage />,
            },
            {
                path: ROUTES.SEARCH_PLANTS,
                element: <SearchPage />,
            },
            {
                path: ROUTES.HISTORY,
                element: (
                    <ProtectedRoute authRequired={true}>
                        <HistoryPage />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
