import { useNavigate } from "react-router-dom";
import { useStarshipsContext } from "../../context/StarshipsContext";
import { Starship } from "../../types/starshipsTypes";
import { ScrollToTopButton } from "../../components/ScrollTopButton";
import { useCallback, useEffect } from "react";

export function StarshipsList() {
    const { starships, loading, error, loadMore } = useStarshipsContext();
    const navigate = useNavigate();

    const uniqueStarships = starships.filter(
        (checkingStarship, index, starshipsList) =>
            index === starshipsList.findIndex((s) => s.url === checkingStarship.url)
    );

    const handleScroll = useCallback(() => {
        const bottom =
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 100;
        if (bottom && !loading) {
            loadMore();
        }
    }, [loading, loadMore]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div>
            <ul>
                {error && <li>Error: {error.message}</li>}
                {loading && <li>Loading...</li>}
                {!loading && !error && starships.length === 0 && <li>No starships found</li>}
                {uniqueStarships.map((starship: Starship, index) => {
                    const id = starship.url?.split('/')[5] || index;

                    return (
                        <li
                            key={`${id}-${starship.name}-${index}`}
                            className="flex flex-col sm:mx-4 lg:mx-32 my-4 bg-gray-900 bg-opacity-50 shadow-lg rounded-lg w-full sm:w-auto hover:cursor-pointer hover:bg-yellow-600 hover:bg-opacity-90 hover:text-black"
                            onClick={() => navigate(`/starships/${id}`)}
                        >
                            <div className="p-8 flex flex-col">
                                <p className="uppercase font-semibold">{starship.name}</p>
                                <p className="font-thin">{starship.model}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {loading && <p className="text-center text-white">Loading more starships...</p>}
            <ScrollToTopButton />
        </div>
    );
};