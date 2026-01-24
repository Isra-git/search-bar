import React, { useEffect, useState } from "react";

//  importamos redux
import { useSelector } from "react-redux";

// importamos las acciones
import * as actions from "../actions";

// importamos el componente de renderizado de las  tarjetas
import PostItem from "./PostItem";

const resultsSearchPosts = (props) => {
  // traemos los resultados
  const resultPosts = useSelector((state) => state.posts.resultsPosts);
  const sortBy = useSelector((state) => state.posts.sortBy);

  // traemos el estado de carga
  const isLoading = useSelector((state) => state.posts.isLoading);

  //console.log("ejecutado busqueda :", resultPosts);

  // logica de ordenamiento de los resultados
  const getSortedPosts = () => {
    if (!resultPosts) return [];

    // creamos una copia porque .sort() modifica el original
    return [...resultPosts].sort((a, b) => {
      // Orden descendente (de mayor a menor)
      return b[sortBy] - a[sortBy];
    });
  };

  // ejecutamos el ordenamiento
  const sortedPosts = getSortedPosts();

  // renderizado en base al estado de isLoading
  // si esta cargando
  if (isLoading) {
    return (
      <div className="results-posts-list">
        <div className="results-loading">
          <div className="spinner"></div>
          <p>Buscando historias...</p>
        </div>
      </div>
    );
  }

  // si no carga (finalizo la promesa) y no hay resultados
  if (!resultPosts || resultPosts.length === 0) {
    return (
      <div className="results-posts-list">
        <div className="results-empty">
          <p>No hay resultados para mostrar. Intenta buscar algo arriba.</p>
        </div>
      </div>
    );
  }

  // si hay resultados -> los mostramos
  return (
    <div className="results-posts-list">
      {/*  Usamos .map() para iterar sobre los resultados */}
      {sortedPosts.map((post) => {
        return <PostItem key={post.objectID} post={post} />;
      })}
    </div>
  );
};
export default resultsSearchPosts;
