import { Input } from "@nextui-org/react";
import { useState } from "react";

import { LinearLoading } from "@/components/loading/LinearLoading";
import { useDebounce } from "@/hooks/useDebounce";
import { useGetPlantBySearchQuery } from "@/store/api/plantsApi";

import { SearchIcon } from "./SearchIcon";

export const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const { data, isLoading, error } = useGetPlantBySearchQuery(debouncedSearchTerm);

    return (
        <>
            <Input
                className="relative max-w-sm"
                placeholder="Interested in something specific?"
                endContent={<SearchIcon className="text-default-400" size={20} />}
                radius="full"
                variant="bordered"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm.length > 0 && data && (
                <div className="absolute top-[725px] z-20 flex max-h-[125px] w-full max-w-[370px] flex-col overflow-auto rounded-md border-2">
                    {data?.data?.map((plant) => (
                        <div
                            key={plant.id}
                            className="flex items-center gap-3 border-b-2 bg-white px-3 py-2"
                        >
                            {isLoading ? (
                                <LinearLoading />
                            ) : (
                                <>
                                    {error ? (
                                        <>Nothing was found for this request</>
                                    ) : (
                                        <>
                                            <img
                                                className="h-5 w-5"
                                                src={plant.defaultImage?.thumbnail}
                                                alt="Plant"
                                            />
                                            <span>{plant.scientificName}</span>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
