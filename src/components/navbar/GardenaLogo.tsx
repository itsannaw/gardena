import { Link } from "react-router-dom";

export const GardenaLogo = () => {
    return (
        <Link className="flex items-center gap-2" to={"/"}>
            <img
                className="w-[33px] h-[54px]"
                src="../src/assets/icons/plant.svg"
                alt="Gardena Logo"
            />
            <p className="text-sm lg:text-xl font-bold tracking-tight">GARDENA</p>
        </Link>
    );
};
