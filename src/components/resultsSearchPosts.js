import React, { useEffect } from "react";

//  importamos redux
import { useSelector } from "react-redux";

// importamos las acciones
import * as actions from "../actions";

// importamos el icono de react-icons
import { FaUserPen } from "react-icons/fa6";

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
        return (
          <div key={post.objectID} className="result-post-card">
            {/* Línea superior: Autor e Info */}
            <div className="result-post-card__meta">
              <div className="result-post-card__author">
                <FaUserPen className="icon-author" />
                {/* Usamos fallback para el autor por si la API cambia el campo */}
                <span>{post.author || post.by || "Anónimo"}</span>
              </div>

              <div className="result-post-card__stats">
                <span>{post.num_comments || 0} comments</span>
                <span className="divider">|</span>
                <span>{post.points || 0} points</span>
              </div>
            </div>

            {/* Línea inferior: Título */}
            <div className="result-post-card__title">
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {post.title || post.story_title || "Ver historia"}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default resultsSearchPosts;
