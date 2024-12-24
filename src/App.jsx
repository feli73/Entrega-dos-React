import React from 'react'
import './App.css'
import  NavBar  from './componentes/NavBar.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from './componentes/ItemListContainer.jsx'
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx';

function App() {
  

  return (

   <div>
    <BrowserRouter>
    <NavBar />
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
