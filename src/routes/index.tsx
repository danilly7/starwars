import { Routes, Route} from 'react-router-dom';
import { Fitxa } from '../pages/StarshipFitxa';
import { Home } from '../pages/Home';
import { StarshipsList } from '../pages/StarshipsList';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starships" element={<StarshipsList />} />
            <Route path="/starships/:id" element={<Fitxa />} />
        </Routes>
    );
};