import Footer from '../layouts/Footer';
import Body from '../layouts/Body';
import Header from '../layouts/Header';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Contato from '../pages/Contato';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
    return (
        <>
            {/* PASSAGEM DE PROPS */}
            <Header nome="IW Training" curso="FullStack" />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Body><Home /></Body>} />
                    <Route path='/produtos' element={<Body><Produtos /></Body>} />
                    <Route path='/contato' element={<Body><Contato /></Body>} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default AppRoutes;