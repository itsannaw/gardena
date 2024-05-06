import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_PERENUAL } from "@/utils/constants/url";

export const plantsApi = createApi({
    reducerPath: "plants",
    baseQuery: fetchBaseQuery({ baseUrl: API_PERENUAL.BASE_URL }),
    endpoints: (builder) => ({
        getPlants: builder.query({
            query: API_PERENUAL.PLANT_LIST,
        }),

        getPlantById: builder.query({
            query: API_PERENUAL.PLANT_DETAILS,
        }),
    }),
});

export const { useGetPlantsQuery, useGetPlantByIdQuery } = plantsApi;
