import { useState } from 'react'
import Header  from './components/header/Header'
import Footer  from './components/footer/Footer'
import Carrossel from './components/carrossel/Carrossel'
import Filtro from './components/filtro/Filtro'
import './App.css'
import Perfil from './components/perfil/Perfil'
import Tecnologias from './components/tecnologias/Tecnologias'
import Projetos from './components/projetos/Projetos'

function App() {

  return (
    <>
      <Header />
      <Perfil/>

      <Tecnologias />
      <Projetos />
      <Footer /> 
    </>
  )
}

export default App
