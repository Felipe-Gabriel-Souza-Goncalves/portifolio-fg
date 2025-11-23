import { useState } from "react";
import seta from "../../assets/icons/setaDireita.svg";
import { projetos, tecnologias } from "../../utils/projetos.js";
import "./Carrossel.css";

function Carrossel({ tipo, categoria }) {
  const [crr, moveItem] = useState(undefined);
  const [posX, translate] = useState(0);

  function prevItem() {
    const itens = document.querySelectorAll(`#carrossel-${categoria} div`);
    let nextPos = (crr - 1 + itens.length) % itens.length || 0;

    moveItem(nextPos);
    updateFocus(nextPos);
  }

  function postItem() {
    const itens = document.querySelectorAll(`#carrossel-${categoria} div`);
    let nextPos = (crr + 1) % itens.length || 0;
    console.log(nextPos);

    moveItem(nextPos);
    updateFocus(nextPos);
  }

  function updateFocus(pos) {
    const itens = document.querySelectorAll(`#carrossel-${categoria} div`);
    const ultimoItem = document.querySelector(`#carrossel-${categoria} .item-ativo`);
    if (ultimoItem) {
      ultimoItem.classList.remove("item-ativo");
    }

    itens[pos].classList.add("item-ativo");
    if (categoria == "educacional" || categoria == "pessoal") {
      updateProjetos(pos);
    }
  }

  function updateProjetos(pos) {
    const itens = document.querySelectorAll(`#carrossel-${categoria} div`);
    console.log(itens.length);

    // esconde todos primeiro
    itens.forEach((i) => (i.style.display = "none"));

    // calcula começo seguro
    let start = Math.min(Math.max(pos, 0), itens.length - 1);

    // mostra apenas 2
    itens[start].style.display = "block";

    start == itens.length - 1 ? "" : itens[start + 1].style.display = "block";
  }

  return (
    <>
      <div className="carrossel">
        <div className="btn-prev">
          <button onClick={prevItem}>
            <img src={seta} alt="<" />
          </button>
        </div>

        {/* Itens do carrossel */}
        <div className="itensCarrossel" id={"carrossel-" + categoria}>
          {(() => {
            switch (categoria) {
              // TECNOLOGIAS
              case "front-end":
                return tecnologias.frontEnd[0].map((nome, i) => (
                  <div key={i} className="card-tech">
                    <img
                      className="img-item-carrossel"
                      src={tecnologias.frontEnd[1][i]}
                      alt={nome}
                    />
                    <h2>{nome}</h2>
                  </div>
                ));

              case "back-end":
                return tecnologias.backEnd[0].map((nome, i) => (
                  <div key={i} className="card-tech">
                    <img
                      className="img-item-carrossel"
                      src={tecnologias.backEnd[1][i]}
                      alt={nome}
                    />
                    <h2>{nome}</h2>
                  </div>
                ));

              case "outros":
                return tecnologias.outros[0].map((nome, i) => (
                  <div key={i} className="card-tech">
                    <img className="img-item-carrossel" src={tecnologias.outros[1][i]} alt={nome} />
                    <h2>{nome}</h2>
                  </div>
                ));

              // PROJETOS
              case "educacional":
                return projetos
                  .filter((p) => p.educacional == true)
                  .map((projeto, i) => (
                    <div key={i} className="card-projetos">
                      <a target="_blank" href={projeto.link}>
                        <img className="img-item-carrossel" src={projeto.img} alt={projeto.nome} />
                        <h2>{projeto.nome}</h2>
                      </a>
                    </div>
                  ));

              case "pessoal":
                return projetos
                  .filter((p) => p.educacional == false)
                  .map((projeto, i) => (
                    <div key={i} className="card-projetos">
                      <a target="_blank;" href={projeto.link}>
                        <img className="img-item-carrossel" src={projeto.img} alt={projeto.nome} />
                        <h2>{projeto.nome}</h2>
                      </a>
                    </div>
                  ));

              default:
                return <div>Categoria não especificada</div>;
            }
          })()}
        </div>

        <div className="btn-post">
          <button onClick={postItem}>
            <img src={seta} alt="<" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrossel;
