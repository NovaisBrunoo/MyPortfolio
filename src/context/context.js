import { useContext, useState } from "react";

import { createContext } from "react";

const ContextGlobal = createContext({});

export function ContextProvider({ children }) {
    const [contextTest, setContextTest] = useState('test')

    return (
        <ContextGlobal.Provider value={{ contextTest, setContextTest }}>
            {children}
        </ContextGlobal.Provider>
    )
}

export function useHooke() {
    return useContext(ContextGlobal);
}