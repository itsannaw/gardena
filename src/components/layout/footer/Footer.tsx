import { Link } from "@nextui-org/react";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { URL } from "@/utils/constants/url";

export const Footer = () => {
    return (
        <div
            id="contacts"
            className="mb-3 mt-12 flex flex-col items-center justify-center gap-2 border-t-1 pt-2"
        >
            <Link
                className="font-medium text-black hover:text-default-700 dark:text-white dark:hover:text-default-300"
                href={URL.GITHUB}
            >
                <GithubIcon className={"h-6 w-6 fill-black dark:fill-white"} /> &nbsp; Github
            </Link>
            <div className="flex justify-center text-center text-sm font-medium">
                2024 © The site was created as part of the React intensive course at Aston.
            </div>
        </div>
    );
};
