import { useState, useEffect } from "react";

export function useFetch<T>(url: string, page: number) {
    const [data, setData] = useState<{ results: T[]; next: string | null } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${url}?page=${page}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                setHasMore(json.next !== null);
                setData((prevData) => {
                    if (prevData) {
                        return { results: [...prevData.results, ...json.results], next: json.next };
                    }
                    return { results: json.results, next: json.next };
                });
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url, page]);

    return { data, loading, error, hasMore };
}