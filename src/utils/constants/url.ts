export const URL = {
    GITHUB: "https://github.com/itsannaw/gardena/tree/main",
};

export const API_PERENUAL = {
    BASE_URL: "https://perenual.com/api",
    PLANT_LIST: (page: number) =>
        `/species-list?key=${import.meta.env.VITE_APP_PERENUAL_API_KEY}&page=${page}`,
    PLANT_DETAILS: (id: string) =>
        `/species/details/${id}?key=${import.meta.env.VITE_APP_PERENUAL_API_KEY}`,
    PLANT_SEARCH: (query: string) =>
        `/species-list?key=${import.meta.env.VITE_APP_PERENUAL_API_KEY}&q=${query}`,
};
