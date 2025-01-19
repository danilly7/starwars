import { Routes, Route } from 'react-router-dom';
import { Fitxa } from '../pages/StarshipFitxa';
import { Home } from '../pages/Home';
import { StarshipsList } from '../pages/StarshipsList';
import { Login } from '../components/auth/login';
import { Register } from '../components/auth/register';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starships" element={<StarshipsList />} />
            <Route path="/starships/:id" element={<Fitxa />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};