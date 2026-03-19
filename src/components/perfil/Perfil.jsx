import "./Perfil.css"
import fotoPerfil from "../../assets/icons/fotoPerfil.png"

export default function Perfil(){
  return <>
    <div id="perfil">
      <div id="perfil-esquerdo">
        <img src={fotoPerfil} alt="Foto do Felipe" />
        <div id="perfil-contatos">
          <p>E-mail: <a href="mailto:felipe.gs.goncalves82@gmail.com">felipe.gs.goncalves82@gmail.com</a></p>
          <p>Github (pessoal):
            <a target="_blank" href="https://github.com/Felipe-Gabriel-Souza-Goncalves" rel="noopener noreferrer"> &nbsp;Felipe Gabriel</a>
          </p>
          <p>Github (educacional):
            <a target="_blank" href="https://github.com/FelipeGSG" rel="noopener noreferrer">&nbsp; FelipeGSG</a>
          </p>
          <p>Linkedin:
            <a target="_blank" href="https://www.linkedin.com/in/felipe-gabriel-souza-gonçalves-b78779358"  rel="noopener noreferrer">&nbsp;Felipe Gabriel</a>
          </p>
        </div>
      </div>
      <div id="perfil-direito">
        <h2>Olá, sou Felipe Gabriel</h2>
        <p>Me chamo Felipe Gabriel, possuo um técnico em <strong>Desenvolvimento de Sistemas</strong> pelo SENAI e atualmente estou fazendo minha graduação em <strong>Engenharia de Software</strong> na UMC. <br />
        
        Tenho o sonho de me tornar um programador back-end que possa trazer valor para as pessoas! <br />

        Entrei no mundo da programação em janeiro de 2024 no SENAI e desde então busco aprender mais sobre, sendo proativo em estudar diversos conteúdos relacionados e testar novas funcionalidades para aprendizado, entre jogos, otimização de algoritmos, interfaces web e outros! <br/>
        
        Gosto de criar sistemas para testar meus conhecimentos e servir de recursos para os outros, assim como gosto de passar o tempo criando jogos web para entreter as pessoas!
        </p>
      </div>
    </div>
  </>
}