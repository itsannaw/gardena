import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const CardComponent = () => {
    return (
        <Card
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[300px]"
            shadow="sm"
            isBlurred
            isPressable
        >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Family Plant</p>
                <small className="text-default-500">Year</small>
                <h4 className="font-bold text-large">Name Plant</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/hero-card-complete.jpeg"
                    width={270}
                />
            </CardBody>
        </Card>
    );
};

