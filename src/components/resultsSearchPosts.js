import React, { useEffect } from "react";

//  importamos redux
import { useSelector } from "react-redux";

// importamos las acciones
import * as actions from "../actions";

const resultsSearchPosts = (props) => {
  // traemos los resultados
  const resultPosts = useSelector((state) => state.posts.resultsPosts);

  // traemos el estado de carga
  const isLoading = useSelector((state) => state.posts.isLoading);

  console.log("ejecutado busqueda :", resultPosts);

  // renderizado en base al estado de isLoading
  // si esta cargando
  if (isLoading) {
    return (
      <div className="results-loading">
        <div className="spinner"></div> // para spinner de carga (scss)
        <p>Buscando historias...</p>
      </div>
    );
  }
  // si no carga (finalizo la promesa) y no hay resultados
  if (!resultPosts || resultPosts.length === 0) {
    return (
      <div className="results-empty">
        <p>No hay resultados para mostrar. Intenta buscar algo arriba.</p>
      </div>
    );
  }
  // si hay resultados -> los mostramos
  return (
    <div className="results-search-posts-wrapper">
      <div className="results-search-posts">
        {resultPosts &&
          resultPosts.map((post) => {
            return (
              <div key={post.objectID} className="results-search">
                <span className="results">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title || post.story_title || "Sin titulo"}
                  </a>
                </span>
                <span className="results">{post.author}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default resultsSearchPosts;
