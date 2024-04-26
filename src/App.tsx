import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const App = () => {
    return (
        <div className="flex flex-col gap-10">
            <Navbar />
            <div className="mx-24">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;
