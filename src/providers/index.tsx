import React, { ReactNode } from "react";
import { StarshipsProvider } from "../context/StarshipsContext";

interface AppProvidersProps {
    children: ReactNode;
};

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <StarshipsProvider>
            {children}
        </StarshipsProvider>
    );
};