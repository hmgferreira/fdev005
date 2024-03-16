
import './App.css'
import Footer from './layouts/Footer';
import Body from './layouts/Body';
import Header from './layouts/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      {/* PASSAGEM DE PROPS */}
      <Header nome="IW Training" curso="FullStack" />
      <Header nome="FAC" curso="ADS" />
      <Header nome="UNIC" curso="Redes" />
      
      {/* PASSAGEM DE CHILDREN */}
      <Header nome="Pixels">
        <p>
          Olá, eu sou Tags Filho
        </p>
        <p>
          COnteudo de Children
        </p>
      </Header>


      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )

}
      

export default App
