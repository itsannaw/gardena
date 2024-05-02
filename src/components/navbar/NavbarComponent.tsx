import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link as LinkRouter, useLocation } from "react-router-dom";

import { LogoutButton } from "@/components/buttons/logout/LogoutButton";
import { ROUTES } from "@/const/routes";
import { useAuth } from "@/hooks/useAuth";

import { GardenaLogo } from "./GardenaLogo";
import { IconNavbarItem } from "./IconNavbarItem";

export const NavbarComponent = () => {
    const location = useLocation();
    const { isAuth } = useAuth();

    const isHomePage = location.pathname === "/";

    return (
        <Navbar isBlurred shouldHideOnScroll maxWidth={"xl"} height={"80px"}>
            <NavbarBrand>
                <GardenaLogo />
            </NavbarBrand>
            <NavbarContent className="hidden gap-10 sm:flex" justify="center">
                {isHomePage && (
                    <>
                        <NavbarItem>
                            <Link color="foreground" href="#home">
                                Home
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#gallery">
                                Gallery
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#contacts">
                                Contacts
                            </Link>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
            <NavbarContent justify="end">
                {isAuth && (
                    <>
                        <IconNavbarItem
                            iconSrc="/icons/heart.svg"
                            iconAlt="Heart"
                            tooltipContent="Your favourite plants"
                            href="#"
                        />
                        <IconNavbarItem
                            iconSrc="/icons/book.svg"
                            iconAlt="History"
                            tooltipContent="Your search history"
                            href="#"
                        />
                        <LogoutButton />
                    </>
                )}
                {!isAuth && (
                    <>
                        <NavbarItem>
                            <LinkRouter color="foreground" to={ROUTES.LOGIN}>
                                Login
                            </LinkRouter>
                        </NavbarItem>
                        <NavbarItem>
                            <LinkRouter color="foreground" to={ROUTES.SIGNUP}>
                                Signup
                            </LinkRouter>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
        </Navbar>
    );
};
export { Navbar };
