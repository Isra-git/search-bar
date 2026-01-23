import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

const SidebarTags = (props) => {
  const dispatch = useDispatch();

  const handleTagQuery = (tag) => {
    //enviamos el objeto con la estructura ({query: '..'}), a la funcion del padre
    props.handleTagClick({ query: tag });
  };
  //   // dispara la accion para el tag seleccionado
  //   const handleTagQuery = (query) => {
  //     console.log("tag pulsado: ", query);

  //     const cleanQuery = encodeURIComponent(query);

  //     dispatch(actions.fetchResultPosts({ query: cleanQuery }));
  //   };

  //   const handleSort = (criterion) => {
  //     dispatch(setSortBy(criterion));
  //   };

  return (
    <div className="sidebar-flex">
      {/* Contenedor del título: se centrará y separará sus elementos */}
      <div className="sidebar-item">
        <div className="sidebar-title">
          <span>Popular Tags</span>
        </div>
      </div>

      {/* Contenedor de opciones: alineadas a la izquierda con separación icono-texto */}
      <div className="sidebar-options">
        <div className="sidebar-option-row">
          <span onClick={() => handleTagQuery("AI/LLMs")}>AI/LLMs </span>
          <span onClick={() => handleTagQuery("Rust")}>Rust</span>
        </div>

        <div className="sidebar-option-row">
          <span onClick={() => handleTagQuery("Cybersecurity")}>
            Cybersecurity{" "}
          </span>
          <span onClick={() => handleTagQuery("PostgreSQL")}>PostgreSQL</span>
        </div>

        <div className="sidebar-option-row">
          <span onClick={() => handleTagQuery("Self-Hosting")}>
            Self-Hosting{" "}
          </span>
          <span onClick={() => handleTagQuery("Open Source")}>Open Source</span>
        </div>

        <div className="sidebar-option-row">
          <span onClick={() => handleTagQuery("SaaS")}>SaaS </span>
          <span onClick={() => handleTagQuery("SQLite")}>SQLite</span>
        </div>

        <div className="sidebar-option-row">
          <span onClick={() => handleTagQuery("Privacy")}>Privacy </span>
          <span onClick={() => handleTagQuery("Hardware / RISC-V")}>
            Hardware / RISC-V
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarTags;
