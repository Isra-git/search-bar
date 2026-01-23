import React from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "../actions";

import { MdManageSearch, MdAccessTime } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { TbChartBarPopular } from "react-icons/tb";

const SidebarFilter = (props) => {
  // funcion que maneja el cambio de tipo de filtro(puntos,fecha,votos)
  const dispatch = useDispatch();
  const handleSort = (criterion) => {
    dispatch(setSortBy(criterion));
  };

  return (
    <div className="sidebar-flex">
      {/* Contenedor del título: se centrará y separará sus elementos */}
      <div className="sidebar-item">
        <div className="sidebar-title">
          <span>Filtros de Búsqueda</span>
          <MdManageSearch size={25} />
        </div>
      </div>

      {/* Contenedor de opciones: alineadas a la izquierda con separación icono-texto */}
      <div className="sidebar-options">
        <div
          className="sidebar-option-row"
          onClick={() => handleSort("created_at_i")}
        >
          <MdAccessTime size={20} />
          <span>Recientes</span>
        </div>

        <div
          className="sidebar-option-row"
          onClick={() => handleSort("points")}
        >
          <TbChartBarPopular size={20} />
          <span>Valorados +</span>
        </div>

        <div
          className="sidebar-option-row"
          onClick={() => handleSort("num_comments")}
        >
          <FaRegCommentDots size={20} />
          <span>Comentados +</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
