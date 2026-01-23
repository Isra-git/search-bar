import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsSearchPosts from "./resultsSearchPosts";
import SidebarFilter from "./sidebarFilter";
import SidebarTags from "./sidebarTags";

const Results = (props) => {
  // inicializamos el dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    // Realiza la busqueda y gestiona la Persistencia (por url)
    const queryParams = new URLSearchParams(window.location.search);
    const queryValue = queryParams.get("query");

    // si hay una query en la url
    if (queryValue) {
      console.log("Detectado cambio en url, buscando: ", queryValue);

      dispatch(actions.fetchResultPosts({ query: queryValue }));
    }
  }, [props.location.search, dispatch]);

  const handleFormSubmit = (newQuery) => {
    const queryText = newQuery.query;
    console.log("navegando a :", queryText);

    if (queryText) {
      props.history.push(`/results?query=${queryText}`);
    }
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
          <SidebarFilter />
          <SidebarTags handleTagClick={handleFormSubmit} />
        </aside>
        {/* columna derecha */}
        <div className="main-column">
          <ResultsSearchPosts />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Results);
