import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/icons/logo.svg';


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="flex flex-col bg-black relative">
            <div className="flex items-center justify-center mt-5">
                <Link to='/'>
                    <img src={logo} alt="Logo" className="w-40 h-40" />
                </Link>

                <button
                    className="sm:hidden text-slate-300 text-3xl items-end absolute right-5"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✖️' : '☰'}
                </button>
            </div>

            <nav className="hidden sm:flex flex-col mb-5">
                <ul className="flex w-full p-2 border border-white border-opacity-10 text-slate-300 text-xl">
                    <li className="flex-1 flex justify-center">
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'text-slate-200 font-semibold pointer-events-none' : undefined}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li className="flex-1 flex justify-center">
                        <NavLink
                            to='/starships-page'
                            className={({ isActive }) => isActive ? 'text-slate-200 font-semibold pointer-events-none' : undefined}
                        >
                            STARSHIPS
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <nav className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black rounded-b-lg z-20`}>
                <ul className="flex flex-col items-center space-y-4 text-slate-300 text-xl py-4">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'text-slate-200 font-semibold' : undefined}
                            onClick={handleLinkClick}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/starships-page'
                            className={({ isActive }) => isActive ? 'text-slate-200 font-semibold' : undefined}
                            onClick={handleLinkClick}
                        >
                            STARSHIPS
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};