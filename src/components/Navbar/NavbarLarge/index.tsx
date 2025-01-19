import { NavLink } from "react-router-dom";
import { NavbarProps } from "../../../types/navbarType";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export const NavbarLarge = ({ userLoggedIn, currentUser, handleLogout }: NavbarProps) => {
    return (
        <>
            <div className="hidden sm:flex justify-between items-center p-2 text-slate-300 ml-5">
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/starwars.es/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.youtube.com/@StarWars" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-600">
                        <FaYoutube size={24} />
                    </a>
                </div>

                <div className="flex items-center">
                    {!userLoggedIn ? (
                        <>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold pointer-events-none mx-5' : 'mx-5'}
                            >
                                LOG IN
                            </NavLink>
                            <NavLink
                                to='/register'
                                className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold pointer-events-none mx-5' : 'mx-5'}
                            >
                                REGISTER
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleLogout}
                                className="text-slate-300 hover:text-yellow-600 mx-5"
                            >
                                LOG OUT
                            </button>
                            <span className="text-yellow-600 mx-5">{currentUser?.email}</span>
                        </>
                    )}
                </div>
            </div >

            <nav className="hidden sm:flex justify-center items-center p-2 border border-white border-opacity-5 text-slate-300 text-xl">
                <ul className="flex flex-row items-center">
                    <li className="flex flex-col mx-5">
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold pointer-events-none' : undefined}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li className="flex flex-col mx-5">
                        <NavLink
                            to='/starships'
                            className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold pointer-events-none' : undefined}
                        >
                            STARSHIPS
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};