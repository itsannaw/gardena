import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link as LinkRouter, useLocation } from "react-router-dom";

import { ROUTES } from "../../const/routes";

import GardenaLogo from "./GardenaLogo";
import { IconNavbarItem } from "./IconNavbarItem";

const NavbarComponent = () => {
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <Navbar isBlurred shouldHideOnScroll maxWidth={"xl"} height={"80px"}>
            <NavbarBrand>
                <GardenaLogo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-10" justify="center">
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
                <IconNavbarItem
                    iconSrc="../src/assets/icons/heart.svg"
                    iconAlt="Heart"
                    tooltipContent="Your favourite plants"
                    href="#"
                />
                <IconNavbarItem
                    iconSrc="../src/assets/icons/book.svg"
                    iconAlt="History"
                    tooltipContent="Your search history"
                    href="#"
                />
                <IconNavbarItem
                    iconSrc="../src/assets/icons/logout.svg"
                    iconAlt="Logout"
                    tooltipContent="Logout"
                    href="#"
                />
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
            </NavbarContent>
        </Navbar>
    );
};

export default NavbarComponent;
