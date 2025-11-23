import "./Footer.css"

function Footer(){
  return <>
    <footer id="footer">
      <div>
        <p>Acesse meu Github para conhecer mais projetos!</p>
        <span><a target="_blank" href="https://github.com/FelipeGSG">Educacional</a></span>
        <span><a target="_blank" href="https://github.com/Felipe-Gabriel-Souza-Goncalves">Pessoal</a></span>

      </div>
      <div>
        <a href="#header"><strong>Voltar ao topo</strong></a>
      </div>
      <div>
        <p>Caso encontre algum erro no projeto, envie um Issue no repositório</p>
        <span>Repositório: 
          <a target="_blank" href="https://github.com/Felipe-Gabriel-Souza-Goncalves/Portifolio">Portifólio</a>
        </span>
      </div>
    </footer>
  </>
}

export default Footer