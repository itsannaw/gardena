import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import { Footer, NavbarComponent } from "@/components";

const App = () => {
    return (
        <div className="flex flex-col gap-9">
            <NavbarComponent />
            <div className="mx-5 lg:mx-24">
                <ErrorBoundary fallback={<div>Something went wrong...</div>}>
                    <Outlet />
                </ErrorBoundary>
            </div>
            <Footer />
        </div>
    );
};

export default App;
