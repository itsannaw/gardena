import { Link } from "react-router-dom";

export const GardenaLogo = () => {
    return (
        <Link className="flex items-center gap-2" to={"/"}>
            <img
                className="h-[54px] w-[33px]"
                src="../src/assets/icons/plant.svg"
                alt="Gardena Logo"
            />
            <p className="text-sm font-bold tracking-tight lg:text-xl">GARDENA</p>
        </Link>
    );
};
