// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import Navbar from './components/Navbar/Navbar'
import Button from './components/Button/Button'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  console.log ('render app')
  return ( 
    <header>
      <ItemListContainer greeting='Bienvenidos'/>

      <h1>Mora Equipamientos</h1>

      <Navbar/>
      
      <Button text='Home' textColor='red' className='btn btn-primary'/>
      <Button text='Contactos' textColor='red' className='btn btn-danger'/>
      <Button text='¿Quienes somos?' textColor='red' className='btn btn-primary'/>

      <CartWidget/>

      <ItemCount/>
    </header>
  )
}

export default App
