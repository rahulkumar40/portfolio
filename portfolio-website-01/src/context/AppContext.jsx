import { Children, createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProviderC({children}){
    const [color, setColor] = useState(true);
    const value = {
        color,
        setColor
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}