import { useNavigate } from "react-router-dom";
import { useStarshipsContext } from "../../context/StarshipsContext";
import { Starship } from "../../types/starshipsTypes";

export function StarshipsList() {
    const { starships, loading, error } = useStarshipsContext();
    const navigate = useNavigate();

    return (
        <div>
            <ul>
                {error && <li>Error: {error.message}</li>}
                {loading && <li>Loading...</li>}
                {!loading && !error && starships.length === 0 && <li>No starships found</li>}
                {starships.map((starship: Starship) => {
                    const id = starship.url?.split('/')[5];

                    if (!id) return null;

                    return (
                        <li
                            key={id}
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
        </div>
    );
}