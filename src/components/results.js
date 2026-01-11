import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsSearchPosts from "./resultsSearchPosts";

const Results = () => {
  return (
    <div className="results-wrapper">
      <div className="results-logo">
        <Logo size={40} />
      </div>
      <div className="result-search-bar">
        <SearchBar />
      </div>
      <div className="result-search-posts">
        <ResultsSearchPosts />
      </div>
    </div>
  );
};

export default Results;
