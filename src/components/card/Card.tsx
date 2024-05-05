import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import { CardComponentProps } from "@/types/ui";

export const CardComponent = ({ card }: CardComponentProps) => {
    return (
        <Card
            className="w-[400px] border-none bg-background/60 py-4 dark:bg-default-100/50"
            shadow="sm"
            isBlurred
            isPressable
        >
            <CardHeader className="flex-col items-center px-4 pb-0 pt-2">
                <p className="text-tiny font-bold uppercase">{card.scientific_name}</p>
                <small className="text-default-500">Cycle: {card.cycle} </small>
                <h4 className="text-large font-bold truncate max-w-[300px]"> {card.common_name}</h4>
            </CardHeader>
            <CardBody className="items-center overflow-visible py-5">
                {card.default_image?.medium_url ? (
                    <Image
                        alt="Plant"
                        className="rounded-xl object-cover"
                        src={card.default_image?.medium_url}
                        width={300}
                    />
                ) : (
                    <Image
                        alt="Plant"
                        className="rounded-xl object-cover"
                        src="/gallery/missing_image.jpg"
                        width={300}
                    />
                )}
            </CardBody>
        </Card>
    );
};
