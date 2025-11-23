import "./Perfil.css"
import fotoPerfil from "../../assets/icons/fotoPerfil.png"

export default function Perfil(){
  return <>
    <div id="perfil">
      <div id="perfil-esquerdo">
        <img src={fotoPerfil} alt="Foto do Felipe" />
        <div id="perfil-contatos">
          <p>E-mail: felipe.gs.goncalves82@gmail.com</p>
          <p>Github (pessoal):
            <a target="_blank" href="https://github.com/Felipe-Gabriel-Souza-Goncalves" rel="noopener noreferrer"> &nbsp;Felipe Gabriel</a>
          </p>
          <p>Github (educacional):
            <a target="_blank" href="https://github.com/FelipeGSG" rel="noopener noreferrer">&nbsp; FelipeGSG</a>
          </p>
          <p>Linkedin:
            <a target="_blank" href="https://www.linkedin.com/in/felipe-gabriel-souza-gonçalves-b78779358"  rel="noopener noreferrer">&nbsp;Felipe Gabriel</a>
          </p>
          <p>LeetCode:
            <a target="_blank" href="https://leetcode.com/u/felipe-gabriel-souza-goncalves/"  rel="noopener noreferrer">&nbsp;Felipe Gabriel</a>
          </p>
        </div>
      </div>
      <div id="perfil-direito">
        <h2>Olá!</h2>
        <p>Me chamo Felipe Gabriel, estudo Desenvolvimento de Sistemas e tenho o sonho de me tornar um programador full-stack! <br />
          Entrar no mundo da programação em janeiro de 2024 no SENAI e desde então busco aprender mais sobre! Gosto de criar sistemas simples para testar meus conhecimentos e servir de recursos para outros assim como gosto de passar o tempo criando jogos web para entreter as pessoas!
        </p>
      </div>
    </div>
  </>
}