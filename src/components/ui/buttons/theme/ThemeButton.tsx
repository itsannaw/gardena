import { Button, Tooltip } from "@nextui-org/react";
import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";

export const ThemeButton = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    return (
        <Tooltip showArrow={true} content={isDarkTheme ? "Light mode" : "Dark mode"}>
            <Button isIconOnly variant="light" onClick={toggleTheme}>
                <img
                    className="h-6 w-6"
                    src={isDarkTheme ? "/icons/sun.svg" : "/icons/moon.svg"}
                    alt={isDarkTheme ? "Light mode" : "Dark mode"}
                />
            </Button>
        </Tooltip>
    );
};
