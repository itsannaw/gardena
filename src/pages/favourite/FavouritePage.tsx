import { CardComponent } from "@/components";
import { DeleteAllFavouriteButton } from "@/components/ui/buttons";
import { SpinnerLoading } from "@/components/ui/loading/SpinnerLoading";
import useFetchFavouritePlantsData from "@/hooks/useFetchFavouritePlantsData";
import useFetchUserFavourites from "@/hooks/useFetchUserFavourites";
import { CardType } from "@/types/ui";

export const FavouritePage = () => {
    const { favouriteIds, loading: favouriteLoading } = useFetchUserFavourites();
    const {
        speciesData,
        loading: speciesLoading,
        error,
    } = useFetchFavouritePlantsData(favouriteIds);

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-center text-2xl font-bold">Favourite Plants</h2>
            {favouriteLoading || speciesLoading ? (
                <div>
                    <SpinnerLoading />
                </div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : speciesData.length === 0 && favouriteIds.length ? (
                <div>You have no favourites.</div>
            ) : (
                <>
                    <div className="flex w-full justify-end">
                        <DeleteAllFavouriteButton />
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {speciesData?.map((card: CardType) => (
                            <CardComponent
                                key={card.id}
                                card={card}
                                liked={favouriteIds.includes(card.id)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
