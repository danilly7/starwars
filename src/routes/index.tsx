import { Routes, Route} from 'react-router-dom';
import { Fitxa } from '../components/StarshipFitxa';
import { Home } from '../components/Home';
import { StarshipsList } from '../components/StarshipsList';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starships" element={<StarshipsList />} />
            <Route path="/starships/:id" element={<Fitxa />} />
        </Routes>
    );
};