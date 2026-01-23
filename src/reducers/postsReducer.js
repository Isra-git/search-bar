// almacen para los datos de los posts
// src/reducers/postsReducer.js
// src/reducers/postsReducer.js

const INITIAL_STATE = {
  recentPosts: [], // datos de posts mas recientes
  resultsPosts: [], // resultados de la query del usuario
  isLoading: false, // Estado de carga
  sortBy: "story_id",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_RECENT_POSTS":
      return {
        ...state,
        recentPosts: action.payload,
        isLoading: false,
      };

    case "SET_RESULT_POSTS":
      return {
        ...state,
        resultsPosts: action.payload,
        isLoading: false,
      };

    // Estado para mostrar que los datos se estan cargando
    case "SET_RESULTS_LOADING":
      return {
        ...state,
        isLoading: action.payload, // Recibimos true al empezar, false si falla
      };

    // Estado para ordenar los resultados de la busqueda
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
}
