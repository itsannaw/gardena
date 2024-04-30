import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const CardComponent = () => {
    return (
        <Card
            className="max-w-[300px] border-none bg-background/60 dark:bg-default-100/50"
            shadow="sm"
            isBlurred
            isPressable
        >
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                <p className="text-tiny font-bold uppercase">Family Plant</p>
                <small className="text-default-500">Year</small>
                <h4 className="text-large font-bold">Name Plant</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="rounded-xl object-cover"
                    src="/images/hero-card-complete.jpeg"
                    width={270}
                />
            </CardBody>
        </Card>
    );
};
