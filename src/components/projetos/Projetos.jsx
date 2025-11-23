import "./Projetos.css"
import Carrossel from "../carrossel/Carrossel"

export default function Tecnologias(){
  
  return <>
    <div id="projetos">
      <div id="faixaProjetos">
        <h2>Projetos</h2>
      </div>

      <div id="projetos-educacional">
        <h3>Educacionais</h3>
        <Carrossel tipo="projeto" categoria="educacional"/>
      </div>

      <div id="projetos-pessoal">
        <h3>Pessoais</h3>
        <Carrossel tipo="projeto" categoria="pessoal"/>
      </div>


    </div>
  </>
}