import { Card } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetPlantByIdQuery } from "@/store/api/plantsApi";

import { LinearLoading } from "../loading/LinearLoading";

export const CardDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, error } = useGetPlantByIdQuery(id || "");

    return (
        <div className="flex flex-col items-center justify-center ">
            {error && <p>Oops...</p>}
            {isLoading ? (
                <LinearLoading />
            ) : (
                <div className="flex flex-col items-start justify-start gap-2 ">
                    <button className="text-base font-semibold" onClick={() => navigate(-1)}>
                        ← Go back
                    </button>
                    {data && (
                        <Card className="flex max-w-[1200px] flex-wrap justify-between p-5">
                            <div className="flex justify-start gap-20">
                                {data.defaultImage?.mediumUrl ? (
                                    <img
                                        className="w-[400px]"
                                        src={data.defaultImage?.mediumUrl}
                                        alt="Picture Plant"
                                    />
                                ) : (
                                    <img
                                        alt="Plant"
                                        className="rounded-xl object-cover"
                                        src="/gallery/missing_image.jpg"
                                        width={400}
                                    />
                                )}
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <h1 className="text-2xl font-bold">{data.commonName}</h1>
                                        <p className="text-sm">{data.scientificName}</p>
                                    </div>
                                    <span>
                                        <b>Type:</b> {data.type}
                                    </span>
                                    <div>
                                        <b>Description:</b> {data.description}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>
                                            <b>Watering:</b> {data.watering}
                                        </span>
                                        <span>
                                            <b>Sunlight:</b> {data.sunlight}
                                        </span>
                                        <span>
                                            <b>Poisonous to humans:</b>{" "}
                                            {data.poisonousToHumans ? "true" : "false"}
                                        </span>
                                        <span>
                                            <b>Poisonous to pets:</b>{" "}
                                            {data.poisonousToPets ? "true" : "false"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            )}
        </div>
    );
};
