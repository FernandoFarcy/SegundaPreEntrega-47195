import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/Items/ItemListContainer';
import ItemDetailContainer from './componentes/Details/ItemDetailContainer';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import Contact from './pages/Contact';
import Detalle from './pages/Detalle';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
  <>
    {/* <h1>React-Router</h1> */}

     <NavBar /> 
   
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/women' element={<Women />}/>
      <Route path='/men' element={<Men />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='/detalle/:id' element={<Detalle />}/>
    </Routes>

{/* <footer>
  FOOTER
</footer> */}
   
    {/* <ItemListContainer /> */}
    {/* <ItemDetailContainer /> */}

  </>
  )
}

export default App
