import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Tooltip } from "@nextui-org/react";
import GardenaLogo from "./GardenaLogo";

const NavbarComponent = () => {
    return (
        <Navbar isBlurred maxWidth={"xl"} height={"80px"}>
            <NavbarBrand>
                <GardenaLogo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" color="foreground">
                        Gallery
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contacts
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Tooltip showArrow={true} content="Your favourite plants">
                        <Link href="#">
                            <img
                                className="h-6 w-6"
                                src="../src/assets/icons/heart.svg"
                                alt="Heart"
                            />
                        </Link>
                    </Tooltip>
                </NavbarItem>
                <NavbarItem>
                    <Tooltip showArrow={true} content="Logout">
                        <Link href="#">
                            <img
                                className="h-6 w-6"
                                src="../src/assets/icons/logout.svg"
                                alt="Logout"
                            />
                        </Link>
                    </Tooltip>
                </NavbarItem>
                <NavbarItem>
                    <Tooltip showArrow={true} content="Logout">
                        <Link href="#">
                            <img
                                className="h-6 w-6"
                                src="../src/assets/icons/logout.svg"
                                alt="Logout"
                            />
                        </Link>
                    </Tooltip>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">
                        <span className="">Login</span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">
                        <span>Signup</span>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default NavbarComponent;
