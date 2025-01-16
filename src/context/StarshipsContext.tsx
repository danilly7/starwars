import { createContext, useContext, ReactNode } from 'react';
import { StarshipsContextProps, Starship } from "../types/starshipsTypes";
import { useFetch } from '../hooks/useFetch';
import { apiStarships } from '../utils/api';

const StarshipsContext = createContext<StarshipsContextProps | undefined>(undefined);

export const StarshipsProvider = ({ children }: { children: ReactNode }) => {
    const {data, loading, error} = useFetch<{results:Starship[]}>(apiStarships);

    const getStarshipById = (id: number) => {
        return data?.results.find((starship) => {
            const starshipId = starship.url?.split('/')[5];
            return starshipId === String(id);
        });
    }

  return (
    <StarshipsContext.Provider value={{ starships:data?.results || [], loading, error, getStarshipById }}>
      {children}
    </StarshipsContext.Provider>
  );
};

export const useStarshipsContext = () => {
  const context = useContext(StarshipsContext);
  if (!context) {
    throw new Error('useStarshipsContext must be used within a StarshipsProvider');
  }
  return context;
};