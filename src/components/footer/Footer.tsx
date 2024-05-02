import { Link } from "@nextui-org/react";

import { URL } from "@/const/url";

export const Footer = () => {
    return (
        <div id="contacts" className="mb-3 mt-10 flex flex-col items-center justify-center gap-2">
            <Link
                className="font-medium text-black hover:text-default-700 dark:hover:text-default-300"
                href={URL.GITHUB}
            >
                <img className="h-4 w-4" src="/icons/github.svg" alt="Github" /> &nbsp; Github
            </Link>
            <div className="flex justify-center text-center text-sm font-medium">
                2024 © The site was created as part of the React intensive course at Aston.
            </div>
        </div>
    );
};
