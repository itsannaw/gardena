import { NextUIProvider } from "@nextui-org/react";
import { ReactNode, createContext, useState, useMemo, useCallback } from "react";

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = useCallback(() => {
        setIsDarkTheme((isDark) => !isDark);
    }, [setIsDarkTheme]);

    return (
        <ThemeContext.Provider
            value={useMemo(() => ({ isDarkTheme, toggleTheme }), [isDarkTheme, toggleTheme])}
        >
            <NextUIProvider>
                <main className={`bg-background text-foreground ${isDarkTheme ? "dark" : ""}`}>
                    {children}
                </main>
            </NextUIProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
