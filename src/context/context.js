import { useContext, useState } from "react";

import { createContext } from "react";

const ContextGlobal = createContext({});

export function ContextProvider({ children }) {
    const [contextTest, setContextTest] = useState('')
    const pageHomeherf = '#home'
    const pageHome = 'home'
    const pageAboutherf = '#about'
    const pageAbout = 'about'
    const pageProjectherf = '#project'
    const pageProject = 'project'
    const pageTechherf = '#tech'
    const pageTech = 'tech'

    return (
        <ContextGlobal.Provider value={{ contextTest, setContextTest, pageTech, pageProject, pageAbout, pageHome, pageAboutherf, pageTechherf, pageProjectherf, pageHomeherf }}>
            {children}
        </ContextGlobal.Provider>
    )
}

export function useHooke() {
    return useContext(ContextGlobal);
}