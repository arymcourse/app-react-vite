import { createContext, useState } from "react";

export const Context = createContext(null);

const AppContext = ( {children} ) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <Context.Provider
            value={{
                mobileMenuOpen, 
                setMobileMenuOpen,
                navigation: [
                    {name: "Products", href: "/products"},
                    {name: "Features", href: "#"},
                    {name: "Marketplace", href: "#"},
                    {name: "Company", href: "#"},
                ]
            }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;