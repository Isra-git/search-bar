import React from "react";
import { useDispatch } from "react-redux";

// importamos las acciones
import * as actions from "../actions";

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

const Home = (props) => {
  // creamos dispatch
  const dispatch = useDispatch();

  const handleSearchSubmit = (values) => {
    // if (event) event.preventDefault();
    console.log("HandleSubmit for query: ", values);

    // desestructuramos el valor de la busqueda para añadirlo a history
    const { query } = values;

    // disparamos la accion de busqueda con la {query} del usuario
    dispatch(actions.fetchResultPosts(values));

    //Navegar a /results, si no estamos en ella
    if (props.location.pathname !== "/results") {
      props.history.push(`/results?query=${query}`);
    }
  };
  return (
    //<div className="app-home-wrapper">
    <div className="component-wrapper">
      <Logo />
      <SearchBar handleSearchSubmit={(query) => handleSearchSubmit(query)} />
      <RecentPosts />
    </div>
    //</div>
  );
};
export default Home;
