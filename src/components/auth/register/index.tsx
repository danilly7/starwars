import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";

export const Register = () => {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
                navigate("/");
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setErrorMessage(err.message);
                } else {
                    setErrorMessage("An unexpected error occurred.");
                }
                setIsRegistering(false);
            }
        }
    };

    if (userLoggedIn) {
        return <Navigate to="/starships" replace />;
    }

    return (
        <div className="flex items-center justify-center h-full pt-12">
            <div className="p-8 bg-gray-900 bg-opacity-70 border-2 border-yellow-600 rounded-lg shadow-lg w-full max-w-md lg:max-w-2xl mx-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                <form onSubmit={onSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 text-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 text-black"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 text-black"
                    />
                    <button
                        type="submit"
                        disabled={isRegistering}
                        className={`w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 disabled:opacity-50`}
                    >
                        {isRegistering ? "Registering..." : "Register"}
                    </button>
                </form>
                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-yellow-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};