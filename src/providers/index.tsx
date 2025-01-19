import React, { ReactNode } from "react";
import { StarshipsProvider } from "../context/starshipsContext";
import { AuthProvider } from "../context/authContext";

interface AppProvidersProps {
    children: ReactNode;
};

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <AuthProvider>
            <StarshipsProvider>
                {children}
            </StarshipsProvider>
        </AuthProvider>
    );
};