import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { getUserId } from "@/store/selectors";
import { CardComponentProps } from "@/types/ui";
import { ROUTES } from "@/utils/constants/routes";

import { FavouriteButton } from "../buttons";

export const CardComponent = ({ card, liked, onLike }: CardComponentProps) => {
    const userId = useAppSelector(getUserId);
    const { navigateWithParams } = useNavigateWithParams();

    const handleClick = () => {
        navigateWithParams(ROUTES.PLANT_DETAIL, {
            id: card.id,
        });
    };
    return (
        <Card
            className="border-none  bg-background/60 py-4 dark:bg-default-100/50 sm:w-[400px]"
            shadow="sm"
            isBlurred
        >
            {userId && (
                <FavouriteButton
                    className="absolute z-20"
                    liked={liked}
                    cardId={card?.id.toString()}
                    userId={userId?.toString() || ""}
                    onLike={onLike}
                />
            )}
            <CardHeader
                className="cursor-pointer flex-col items-center px-4 pb-0 pt-2 hover:underline"
                onClick={handleClick}
            >
                <p className="text-tiny font-bold uppercase">{card.scientificName}</p>
                <small className="text-default-500">Cycle: {card.cycle} </small>
                <h4 className="max-w-[300px] truncate text-large font-bold"> {card.commonName}</h4>
            </CardHeader>
            <CardBody className="items-center overflow-visible py-5">
                <Image
                    alt="Plant"
                    className="w-[300px] rounded-xl object-cover"
                    src={
                        card.defaultImage?.mediumUrl
                            ? card.defaultImage.mediumUrl
                            : "/gallery/missing_image.jpg"
                    }
                    loading="lazy"
                />
            </CardBody>
        </Card>
    );
};
