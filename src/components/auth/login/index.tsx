import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../../firebase/auth";
import { useAuth } from "../../../context/authContext";

export const Login = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setErrorMessage(err.message);
                } else {
                    setErrorMessage("An unexpected error occurred.");
                }
                setIsSigningIn(false);
            }
        }
    };

    const handleGoogleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            doSignInWithGoogle()
                .catch((err: unknown) => {
                    if (err instanceof Error) {
                        setErrorMessage(err.message);
                    } else {
                        setErrorMessage("An unexpected error occurred.");
                    }
                    setIsSigningIn(false);
                });
        }
    };

    if (userLoggedIn) {
        return <Navigate to="/starships" />;
    }

    return (
        <>
            <div className="text-center mt-12 text-white text-lg sm:text-base">
                <p className="font-semibold text-yellow-400">
                    To access the Star Wars Universe, please log in first.
                </p>
            </div>
            <div className="flex items-center justify-center h-full pt-12">
                <div className="p-8 bg-gray-900 bg-opacity-70 border-2 border-yellow-600 rounded-lg shadow-lg w-full max-w-md lg:max-w-2xl mx-4">
                    <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                    <form onSubmit={handleSignIn} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 text-black"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 text-black"
                        />
                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 disabled:opacity-50"
                        >
                            Sign In
                        </button>
                    </form>
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isSigningIn}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-4 disabled:opacity-50"
                    >
                        Sign In with Google
                    </button>
                    <p className="text-red-600 text-center mt-4">{errorMessage}</p>
                    <p className="text-center mt-4">
                        Don't have an account? <Link to="/register" className="text-yellow-600 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};