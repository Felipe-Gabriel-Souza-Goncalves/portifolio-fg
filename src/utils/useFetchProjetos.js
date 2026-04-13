import { useState, useEffect } from "react";
import { imgProjetos } from "./imagens";

function useFetchProjetos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projetos.json");
        if (!response.ok) {
          console.log("Moiô, não conectou com os projetos")
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        // console.log(jsonData)

        // Coloca a referencia do import de imagem no objeto json
        // Porque o React só permite mídia que foi explicitamente declarada
        const parsedData = jsonData.map((proj) => {
          const [categoria, nome] = proj.img.split(".");

          return {
            ...proj,
            img: imgProjetos[categoria][nome],
          };
        });

        setData(parsedData);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    };
    fetchData();
  }, []);

  // console.log("dados:",data)
  return data;
}

export default useFetchProjetos;
