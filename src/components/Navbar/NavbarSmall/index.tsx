import { NavLink } from "react-router-dom";
import { NavbarProps } from "../../../types/navbarType";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export const NavbarSmall = ({ userLoggedIn, currentUser, handleLogout, isMenuOpen, handleLinkClick }: NavbarProps) => {
    return (
        <nav className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black rounded-b-lg z-20`}>
            <ul className="flex flex-col items-center space-y-4 text-slate-300 text-xl py-4">
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : undefined}
                        onClick={handleLinkClick}
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/starships'
                        className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : undefined}
                        onClick={handleLinkClick}
                    >
                        STARSHIPS
                    </NavLink>
                </li>

                <hr className="my-4 w-3/4 border-t border-white border-opacity-20" />

                {!userLoggedIn ? (
                    <>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : undefined}
                                onClick={handleLinkClick}
                            >
                                LOG IN
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/register'
                                className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : undefined}
                                onClick={handleLinkClick}
                            >
                                REGISTER
                            </NavLink>
                        </li>
                        
                        <hr className="my-4 w-3/4 border-t border-white border-opacity-20" />

                        <li className="flex space-x-4 pb-10">
                            <a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/starwars.es/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.youtube.com/@StarWars" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                                <FaYoutube size={24} />
                            </a>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="text-slate-300 hover:text-yellow-600"
                            >
                                LOG OUT
                            </button>
                        </li>
                        <li className="text-yellow-600">
                            <span>{currentUser?.email}</span>
                        </li>

                        <hr className="my-4 w-3/4 border-t border-white border-opacity-20" />

                        <li className="flex space-x-4 pb-10">
                            <a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/starwars.es/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://www.youtube.com/@StarWars" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                                <FaYoutube size={24} />
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};