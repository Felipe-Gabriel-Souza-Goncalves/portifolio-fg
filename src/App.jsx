import { useEffect, useState } from 'react'
import Header  from './components/header/Header'
import Footer  from './components/footer/Footer'
import Carrossel from './components/carrossel/Carrossel'
import Filtro from './components/filtro/Filtro'
import './App.css'
import Perfil from './components/perfil/Perfil'
import Tecnologias from './components/tecnologias/Tecnologias'
import Projetos from './components/projetos/Projetos'
import ListaProjetos from './components/listaProjetos/listaProjetos'

function App() {

  return (
    <>
      <Header />
      <Perfil/>
      {/* <ListaProjetos></ListaProjetos> */}
      <Tecnologias />
      <Projetos />
      <Footer /> 
    </>
  )
}

export default App
