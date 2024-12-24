import React from 'react'
import './App.css'
import  Navbarr  from './componentes/Navbarr.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from './componentes/ItemListContainer.jsx'
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx';

function App() {
  

  return (

   <div>
    <BrowserRouter>
    <Navbarr />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />

    </Routes>
    </BrowserRouter>

    </div>

      
  )
}

export default App
