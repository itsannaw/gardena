import { Link } from "react-router-dom";

import { LogoIcon } from "@/components/icons/LogoIcon";

export const GardenaLogo = () => {
    return (
        <Link className="flex items-center gap-2" to={"/"}>
            <LogoIcon className="fill-black dark:fill-white" />
            <p className="text-sm font-bold tracking-tight lg:text-xl">GARDENA</p>
        </Link>
    );
};
