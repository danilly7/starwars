import { useNavigate } from "react-router-dom";
import { useStarshipsContext } from "../../context/StarshipsContext";
import { Starship } from "../../types/starshipsTypes";
import { ScrollToTopButton } from "../../components/ScrollTopButton";

export function StarshipsList() {
    const { starships, loading, error } = useStarshipsContext();
    const navigate = useNavigate();

    const uniqueStarships = starships.filter(
        (starship, index, self) =>
            index === self.findIndex((s) => s.url === starship.url) 
    );

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
            <ScrollToTopButton />
        </div>
    );
};