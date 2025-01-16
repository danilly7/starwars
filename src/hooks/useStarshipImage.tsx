import { useState, useEffect } from "react";

const BASE_IMAGE_URL = "https://starwars-visualguide.com/assets/img/starships";
const DEFAULT_IMAGE_URL = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";

export function useStarshipImage(id: number) {
    const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE_URL);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        const url = `${BASE_IMAGE_URL}/${id}.jpg`;

        img.src = url;
        img.onload = () => {
            setImageUrl(url);
            setLoading(false);
        };
        img.onerror = () => {
            setImageUrl(DEFAULT_IMAGE_URL); //el error es igual a default image
            setLoading(false);
        };
    }, [id]);
    return { imageUrl, loading };
};