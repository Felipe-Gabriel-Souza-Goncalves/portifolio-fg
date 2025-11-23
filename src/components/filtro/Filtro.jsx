import React, { useEffect, useState } from "react";

// Imagens, não queria fazer isso mas ainda n estou familiarizado com react

const linguagensDisponiveis = ["html", "javascript", "python", "react"];

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (ling) => {
    if (selected.includes(ling)) {
      setSelected(selected.filter((l) => l !== ling));
    } else {
      setSelected([...selected, ling]);
    }
  };

  useEffect(() => {
    // Busca os dados JSON
    const fetchData = async () => {
      try {
        const res = await fetch("/projetos.json");
        if (!res.ok) throw new Error("Erro ao carregar dados");
        const json = await res.json();
        setAllProjects(json);
        setFiltered(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filtra os projetos conforme linguagens selecionadas
  useEffect(() => {
    if (selected.length === 0) {
      setFiltered(allProjects);
    } else {
      const filtrados = allProjects.filter((proj) =>
        proj.linguagens.some((l) => selected.includes(l))
      );
      setFiltered(filtrados);
    }
  }, [selected, allProjects]);

  if (loading) return <p>Carregando projetos...</p>;
  if (error) return <p style={{ color: "red" }}>Erro: {error}</p>;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={toggleDropdown}
        style={{
          padding: "8px 14px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#f2f2f2",
          cursor: "pointer",
        }}
      >
        Filtros {selected.length > 0 && `(${selected.length})`}
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 10,
          }}
        >
          {linguagensDisponiveis.map((ling) => (
            <label key={ling} style={{ display: "block", marginBottom: "6px" }}>
              <input
                type="checkbox"
                checked={selected.includes(ling)}
                onChange={() => handleSelect(ling)}
              />{" "}
              {ling.toUpperCase()}
            </label>
          ))}
        </div>
      )}

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "15px",
        }}
      >
        {filtered.map((proj) => (
          
          <div
            key={proj.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              // backgroundColor: "#fff",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={proj.educacional ? 
                    `../../assets/projects/educacional/${proj.img}` : 
                    `../../assets/projects/pessoal/${proj.img}`}
              alt={proj.nome}
              style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }}
              onError={(e) => (console.log(`../../assets/projects/pessoal/${proj.img}`))}
            />
            <h4>{proj.nome}</h4>
            <p style={{ color: "#777", fontSize: "14px" }}>
              {proj.linguagens.join(", ").toUpperCase()}
            </p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "8px",
                color: "#007bff",
                textDecoration: "none",
              }}
            >
              Acessar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
