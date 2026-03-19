import { useEffect } from "react";
import "./listaProjetos.css";

async function comunicarAPI() {
  // try {
  //   useEffect(() => {
  //     (async () =>{
  //       const response = await fetch("http://localhost:3001/githubRepos");

  //       if (!response.ok) {
  //         console.log("Erro na resposta");
  //         return;
  //       }

  //       const data = await response.json();

  //       console.log(data);
  //       console.log(data.data);
  //       console.log(data.data.user);
  //       console.log(data.data.user.repositories);
  //       console.log(data.data.user.repositories.nodes);

  //       const nodes = data.data.user.repositories.nodes;
  //       const hashMap = {};

  //       nodes.forEach(node => {
  //         const linguagens = node.languages.nodes
  //         linguagens.forEach(ling => {
  //           if(hashMap[ling.name]){
  //             hashMap[ling.name] ++
  //           } else{
  //             hashMap[ling.name] = 1
  //           }
  //         });
  //       });

  //       console.log(hashMap)
        
  //       return data;
  //     })();
  //   }, []);
  // } catch (error) {
  //   console.log("Erro ao comunicar", error);
  //   return false;
  // }
}

export default function ListaProjetos() {
  comunicarAPI()
    .then((response) => {
      if (!response.ok) {
        return <></>;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      const projetos = data.data.user.repositories.nodes;
      console.log(projetos);
    })
    .catch((err) => {
      console.log("Erro", err);
    });
}
