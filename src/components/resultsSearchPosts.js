import React, { useEffect } from "react";

//  importamos redux
import { useSelector } from "react-redux";

// importamos las acciones
import * as actions from "../actions";

// importamos el icono de react-icons
import { FaUserPen } from "react-icons/fa6";

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
      <div className="results-search-posts">
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
      <div className="results-search-posts">
        <div className="results-empty">
          <p>No hay resultados para mostrar. Intenta buscar algo arriba.</p>
        </div>
      </div>
    );
  }
  // si hay resultados -> los mostramos
  return (
    <div className="results-search-posts-wrapper">
      <div className="results-search-posts">
        {/*  Usamos .map() para iterar sobre los resultados */}
        {resultPosts.map((post) => {
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
    </div>
  );
};
export default resultsSearchPosts;
