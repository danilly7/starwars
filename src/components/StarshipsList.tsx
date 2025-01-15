import { useFetch } from "../hooks/useFetch";

interface Starship {
    name: string;
    model: string;
}

interface StarshipResponse {
    results: Starship[];
}

export function StarshipsList() {
    const { data, loading, error } = useFetch<StarshipResponse>('https://swapi.py4e.com/api/starships/');


    return (
        <div>
            <ul>
                {error && <li>Error: {error.message}</li>}
                {loading && <li>Loading...</li>}
                {!loading && !error && data?.results?.length === 0 && <li>No starships found</li>}
                {data?.results.map((starship: Starship) => (
                    <li key={starship.name} className="flex flex-col sm:mx-4 lg:mx-32 shadow-lg rounded-lg w-full sm:w-auto">
                        <div className="p-8 flex flex-col bg-gray-900 bg-opacity-60 rounded-lg">
                            <p className="uppercase">{starship.name}</p>
                            <p className="text-slate-400">{starship.model}</p>
                        </div>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}