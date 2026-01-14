import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsSearchPosts from "./resultsSearchPosts";

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
      <div className="result-search-posts">
        <ResultsSearchPosts />
      </div>
    </div>
  );
};

export default Results;
