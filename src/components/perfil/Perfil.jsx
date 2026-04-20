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
        <p>Possuo um técnico em <strong>Desenvolvimento de Sistemas</strong> pelo SENAI e atualmente estou fazendo meu bacharelado em <strong>Engenharia de Software</strong> na UMC. <br />
        
        Entrei no mundo da programação em janeiro de 2024 no SENAI e desde então busco aprender mais sobre, estudando diversos conteúdos relacionados a tecnologia e experimentando novas funcionalidades para aprendizado, incluindo jogos, otimização de algoritmos, interfaces web e outros! <br/>
        
        Gosto de criar sistemas para testar meus conhecimentos e servir de recursos para os outros, espero que meu portifólio possa te interessar nos meus experimentos!
        </p>
      </div>
    </div>
  </>
}