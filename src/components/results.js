import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsSearchPosts from "./resultsSearchPosts";

import { MdManageSearch } from "react-icons/md";

const Results = (props) => {
  // inicializamos el dispatch
  const dispatch = useDispatch();

  const handleFormSubmit = (query) => {
    dispatch(actions.fetchResultPosts(query));
  };
  return (
    <div className="results-wrapper">
      <div className="results-logo">
        <Logo size={40} />
      </div>
      <div className="result-search-bar">
        <SearchBar handleSearchSubmit={handleFormSubmit} />
      </div>
      <div className="results-content-container">
        {/* columna izquierda*/}
        <aside className="results-sidebar">
          <div className="sidebar-title">
            <span>Filtros de Busqueda</span>
            <span>
              <MdManageSearch size={25} />
            </span>
          </div>
          {/* logica de filtro de busqueda*/}
        </aside>
        {/* columna derecha */}
        <div className="result-search-posts">
          <ResultsSearchPosts />
        </div>
      </div>
    </div>
  );
};

export default Results;
