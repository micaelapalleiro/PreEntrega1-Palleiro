import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './assets/Components/NavBar/NavBar';

function App() {


  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={`saludando`} /> 
      {/* llamado a la funcion ItemListContainer */}
    </div>
  )
}

export default App
