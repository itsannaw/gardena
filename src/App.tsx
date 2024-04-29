import { Outlet } from "react-router-dom";

import { Footer, NavbarComponent } from "./components";

const App = () => {
    return (
        <div className="flex flex-col gap-10">
            <NavbarComponent />
            <div className="mx-5 lg:mx-24">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;
