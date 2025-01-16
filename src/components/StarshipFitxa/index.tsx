import { useParams, useNavigate } from "react-router-dom";
import { useStarshipsContext } from "../../context/StarshipsContext";
import { useStarshipImage } from "../../hooks/useStarshipImage";

export const Fitxa = () => {
    const { id } = useParams<{ id: string }>();
    const { getStarshipById } = useStarshipsContext();
    const navigate = useNavigate();

    const starshipId = id && !isNaN(Number(id)) ? Number(id) : null;

    const { imageUrl, loading } = useStarshipImage(starshipId || 0);

    if (!starshipId) {
        return <div>Invalid starship id</div>;
    }

    const starship = getStarshipById(starshipId);

    if (!starship) {
        return <div>Starship not found</div>;
    }

    const handleRedirectToStarships = () => {
        navigate('/starships');
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-center m-3 space-y-4 lg:space-y-0 lg:mx-10">
                <div className="w-full lg:w-auto text-center lg:text-left">
                    <h1 className="text-3xl text-yellow-600 font-semibold">
                        {starship.name} Starship
                    </h1>
                </div>
            </div>

            <div className="p-8 mt-10 flex flex-col md:flex-row items-center md:items-stretch space-y-4 md:space-y-0">
                <div className="flex-shrink-0">
                    {loading ? (
                        <div>Loading image...</div>
                    ) : (
                        <img
                            src={imageUrl}
                            alt={`image-of-${starship.name}`}
                            className="w-full h-auto md:w-auto md:h-96 object-cover"
                        />
                    )}
                </div>
                <div className="bg-gray-900 bg-opacity-60 rounded-sm p-8 border border-gray-900 flex-1 max-h-96 overflow-y-auto font-mono custom-scroll w-full md:w-auto">
                    <h1 className="text-3xl uppercase">{starship.name}</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum labore minus, expedita rem, voluptatum doloribus quidem nesciunt amet neque, dolorem similique magni. Odio deserunt illo eius accusamus quae, dolorum exercitationem.</p>
                    <br />
                    <p><span className="text-gray-500">Model:</span> {starship.model}</p>
                    <p><span className="text-gray-500">Manufacturer:</span> {starship.manufacturer}</p>
                    <p><span className="text-gray-500">Starship class:</span> {starship.starship_class}</p>
                    <br />
                    <p><span className="text-gray-500">Cost in credits:</span> {starship.cost_in_credits} credits</p>
                    <p><span className="text-gray-500">Speed:</span> {starship.max_atmosphering_speed}km/h</p>
                    <p><span className="text-gray-500">Hyperdrive rating:</span> Class {starship.hyperdrive_rating}</p>
                    <p><span className="text-gray-500">Megalight per hour:</span> {starship.MGLT} MGLT</p>
                    <p><span className="text-gray-500">Length:</span> {starship.length}m</p>
                    <p><span className="text-gray-500">Cargo capacity:</span> {starship.cargo_capacity} metric tons</p>
                    <br />
                    <p><span className="text-gray-500">Crew:</span> {starship.crew} pax</p>
                    <p><span className="text-gray-500">Passengers:</span> {starship.passengers} pax</p>
                </div>
            </div>

            <div className="w-full text-center my-5">
                <button
                    onClick={handleRedirectToStarships}
                    className="bg-black text-yellow-600 font-semibold border border-yellow-600 py-2 px-4 rounded hover:bg-yellow-600 hover:bg-opacity-95 hover:text-black"
                >
                    Back to Starships' list
                </button>
            </div>

        </>
    );
}