import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_PERENUAL } from "@/utils/constants/url";
import { convertSnakeToCamelKeys } from "@/utils/helpers/converts";

export const plantsApi = createApi({
    reducerPath: "plants",
    baseQuery: fetchBaseQuery({ baseUrl: API_PERENUAL.BASE_URL }),
    endpoints: (builder) => ({
        getPlants: builder.query({
            query: API_PERENUAL.PLANT_LIST,
            transformResponse: convertSnakeToCamelKeys,
        }),

        getPlantById: builder.query({
            query: API_PERENUAL.PLANT_DETAILS,
            transformResponse: convertSnakeToCamelKeys,
        }),

        getPlantBySearch: builder.query({
            query: API_PERENUAL.PLANT_SEARCH,
            transformResponse: convertSnakeToCamelKeys,
        }),
    }),
});

export const {
    useGetPlantsQuery,
    useGetPlantByIdQuery,
    useGetPlantBySearchQuery,
} = plantsApi;
