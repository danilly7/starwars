import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { StarshipsContextProps, Starship } from "../types/starshipsTypes";
import { useFetch } from '../hooks/useFetch';
import { apiStarships } from '../utils/api';

const StarshipsContext = createContext<StarshipsContextProps | undefined>(undefined);

export const StarshipsProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const { data, loading, error, hasMore } = useFetch<Starship>(apiStarships, page);

  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    if (data?.results) {
      setStarships((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  const getStarshipById = (id: number) => {
    return starships.find((starship) => {
      const starshipId = starship.url?.split('/')[5];
      return starshipId === String(id);
    });
  };

  const loadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <StarshipsContext.Provider
      value={{
        starships,
        loading,
        error,
        getStarshipById,
        loadMore,
      }}>
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