import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;
