import { ErrorBoundary } from "react-error-boundary";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { Footer, LinearLoading, NavbarComponent } from "@/components";

import { useIsLoggedIn } from "./hooks/useIsLoggedIn";

const App = () => {
    const { loading } = useIsLoggedIn();

    return loading ? (
        <div className="flex h-screen items-center justify-center">
            <LinearLoading />
        </div>
    ) : (
        <div className="flex flex-col gap-9">
            <NavbarComponent />
            <div className="mx-5 min-h-[calc(100vh-141px)] lg:mx-24">
                <ErrorBoundary fallback={<div>Something went wrong...</div>}>
                    <ScrollRestoration />
                    <Outlet />
                </ErrorBoundary>
            </div>
            <Footer />
        </div>
    );
};

export default App;
