import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { NavbarLarge } from "../NavbarLarge";
import { NavbarSmall } from "../NavbarSmall";
import logo from '../../../assets/icons/logo.svg';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const { userLoggedIn, currentUser, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMenuOpen(false);
    };

    const handleLogoClick = () => {
        navigate('/');
        setIsMenuOpen(false);
    };

    return (
        <div className="flex flex-col bg-black relative">
            <div className="flex items-center justify-center mt-5">
                <button onClick={handleLogoClick}>
                    <img src={logo} alt="Logo" className="w-40 h-40" />
                </button>

                <button
                    className="sm:hidden text-slate-300 text-3xl items-end absolute right-5"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✖️' : '☰'}
                </button>
            </div>

            <NavbarLarge
                userLoggedIn={userLoggedIn}
                currentUser={currentUser}
                handleLogout={handleLogout}
            />

            <NavbarSmall
                userLoggedIn={userLoggedIn}
                currentUser={currentUser}
                handleLogout={handleLogout}
                isMenuOpen={isMenuOpen}
                handleLinkClick={handleLinkClick}
            />
        </div>
    );
};