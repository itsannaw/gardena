import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_PERENUAL } from "@/utils/constants/url";
import { ConvertProps, convertKeysToCamelCase } from "@/utils/helpers/converters";

export const plantsApi = createApi({
    reducerPath: "plants",
    baseQuery: fetchBaseQuery({ baseUrl: API_PERENUAL.BASE_URL }),
    endpoints: (builder) => ({
        getPlants: builder.query({
            query: API_PERENUAL.PLANT_LIST,
            transformResponse: (response: ConvertProps[]) => {
                const plants = response.map((plant: ConvertProps) => convertKeysToCamelCase(plant));
                return plants;
            },
        }),

        getPlantById: builder.query({
            query: API_PERENUAL.PLANT_DETAILS,
        }),
    }),
});

export const { useGetPlantsQuery, useGetPlantByIdQuery } = plantsApi;
