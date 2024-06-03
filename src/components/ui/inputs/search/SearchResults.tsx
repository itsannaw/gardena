import { Link } from "react-router-dom";

import { useNavigateWithParams } from "@/hooks/useNavigateWithParams";
import { SearchInputType, SearchResultsProps } from "@/types/ui";
import { NOTIFICATIONS } from "@/utils/constants/general";
import { ROUTES } from "@/utils/constants/routes";

export const SearchResults = ({ data, isLoading, error }: SearchResultsProps) => {
    const { navigateWithParams } = useNavigateWithParams();

    return (
        <div className="absolute top-[40px] z-20 flex max-h-[125px] w-full max-w-[370px] flex-col overflow-auto rounded-md border-2 dark:border-slate-800">
            {error ? (
                <span className="bg-white p-4 text-sm dark:bg-black">{NOTIFICATIONS.ERROR}</span>
            ) : isLoading ? (
                <span className="bg-white p-4 text-sm dark:bg-black">We're looking...</span>
            ) : !data?.total ? (
                <span className="bg-white p-4 text-sm dark:bg-black">No results found</span>
            ) : (
                data?.data.map((plant: SearchInputType) => (
                    <Link
                        key={plant.id}
                        onClick={() => {
                            navigateWithParams(ROUTES.PLANT_DETAIL, {
                                id: plant.id,
                            });
                        }}
                        to={""}
                    >
                        <div className="flex items-center gap-3 border-b-2 bg-white px-3 py-2 dark:border-slate-800 dark:bg-black">
                            <img
                                className="h-5 w-5"
                                src={
                                    plant.defaultImage?.thumbnail
                                        ? plant.defaultImage.thumbnail
                                        : "/gallery/missing_image.jpg"
                                }
                                alt="Plant"
                            />
                            <span>{plant.scientificName}</span>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};
