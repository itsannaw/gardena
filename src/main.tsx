import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <NextUIProvider>
                <RouterProvider router={router} />
            </NextUIProvider>
        </Provider>
    </React.StrictMode>,
);
