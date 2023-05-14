import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from '../context/context'

function MainRoutes() {
    return (
        <ContextProvider >
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </ContextProvider >
    )

}

export default MainRoutes;