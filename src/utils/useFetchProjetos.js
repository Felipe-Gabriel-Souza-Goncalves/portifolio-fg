import { useState, useEffect } from "react";

function useFetchProjetos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projetos.json");
        const jsonData = await response.json();
        console.log("fuck")
        setData(jsonData);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    };

    fetchData();
  }, []);

  return data;
}

export default useFetchProjetos;