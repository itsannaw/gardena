import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="mx-24 mt-10">
                <Outlet />
            </div>
        </>
    );
};

export default App;
