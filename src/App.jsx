import React from 'react'
import './App.css'
import  Navbarr  from './componentes/Navbar.jsx'
import ItemListContainer from './componentes/ItemListContainer.jsx'

function App() {
  

  return (
    
      <div>
       <Navbarr />
       <ItemListContainer text='Hola, esto es un texto' />
       
      </div>
      
  )
}

export default App
