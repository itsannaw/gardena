import { Link } from "@nextui-org/react";

import { URL } from "../../const/url";

export const Footer = () => {
    return (
        <div id="contacts" className="flex flex-col justify-center items-center mt-10 mb-3 gap-2">
            <Link
                className="text-black font-medium hover:text-default-700 dark:hover:text-default-300"
                href={URL.GITHUB}
            >
                <img className="h-4 w-4" src="../src/assets/icons/github.svg" alt="Github" /> &nbsp;
                Github
            </Link>
            <div className="flex justify-center font-medium text-sm">
                2024 © The site was created as part of the React intensive course at&nbsp;
                <Link className="text-sm border-b-1" href={URL.ASTON} color="foreground">
                    Aston
                </Link>
                .
            </div>
        </div>
    );
};
