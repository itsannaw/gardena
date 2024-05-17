import { useEffect, useState } from "react";

import { CardType } from "@/types/ui";
import { API_PERENUAL } from "@/utils/constants/url";
import { convertSnakeToCamelKeys } from "@/utils/helpers/converts";

const useFetchFavouritePlantsData = (favouriteIds: number[]) => {
    const [speciesData, setSpeciesData] = useState<CardType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [favCopy, setFavCopy] = useState<number[]>([]);
    const [isFetched, setIsFetched] = useState<boolean>(false);

    useEffect(() => {
        if (favouriteIds.length && !isFetched) {
            setFavCopy(favouriteIds);
            setIsFetched(true);
        }
    }, [favouriteIds, isFetched]);

    useEffect(() => {
        const fetchSpecies = async () => {
            setLoading(true);
            setError("");

            try {
                // 🤪
                const promises = favCopy.map(async (id) => {
                    const response = await fetch(
                        API_PERENUAL.BASE_URL + API_PERENUAL.PLANT_DETAILS(id.toString()),
                    );
                    const data = await response.json();
                    return convertSnakeToCamelKeys(data);
                });
                const results = await Promise.all(promises);
                setSpeciesData(results);
            } catch (error) {
                setError("Failed to fetch species data");
            } finally {
                setLoading(false);
            }
        };

        fetchSpecies();
    }, [favCopy]);

    return { speciesData, loading, error, setSpeciesData };
};

export default useFetchFavouritePlantsData;
