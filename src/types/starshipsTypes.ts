import { ReactNode } from "react";

export interface Starship {
    id: number;
    name: string;

    model: string;
    starship_class?: string;

    manufacturer?: string;
    cost_in_credits?: string;
    length?: string;
    max_atmosphering_speed?: string;
    cargo_capacity?: string;
    consumables?: string;
    hyperdrive_rating?: string;
    MGLT?: string;

    crew?: string;
    passengers?: string;

    films?: string[];
    created?: string;
    edited?: string;
    url?: string;
};

export interface StarshipsContextProps {
    starships: Starship[];
    loading: boolean;
    error: Error | null;
    getStarshipById: (id: number) => Starship | undefined;
    loadMore: () => void;
};

export interface StarshipsProviderProps {
    children: ReactNode;
};