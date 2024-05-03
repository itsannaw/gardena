import { Link, NavbarItem, Tooltip } from "@nextui-org/react";

interface IconNavbarItemProps {
    iconSrc: string;
    iconAlt: string;
    tooltipContent: string;
    href: string;
}

export const IconNavbarItem: React.FC<IconNavbarItemProps> = ({
    iconSrc,
    iconAlt,
    tooltipContent,
    href,
}) => (
    <NavbarItem>
        <Tooltip showArrow={true} content={tooltipContent}>
            <Link href={href}>
                <img className="h-6 w-6" src={iconSrc} alt={iconAlt} />
            </Link>
        </Tooltip>
    </NavbarItem>
);
