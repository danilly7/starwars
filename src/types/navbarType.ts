export interface NavbarProps {
    userLoggedIn: boolean;
    currentUser: { email: string | null } | null; 
    handleLogout: () => void;
    isMenuOpen?: boolean;
    handleLinkClick?: () => void;
};