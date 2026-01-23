// acciones

import axios from "axios";

/*------------------Fetch Recent Posts------------------------------------- */

// url posts mas recientes ->
const urlRecentPosts = "https://hacker-news.firebaseio.com/v0/newstories.json";
// url dato post recientes por id
const urlRecentPost = "https://hacker-news.firebaseio.com/v0/item/${id}.json";

// definimos el tipo como una constante
export const SET_RECENT_POSTS = "SET_RECENT_POSTS";
export const SET_RESULT_POSTS = "SET_RESULT_POSTS";
export const SET_RESULTS_LOADING = "SET_RESULTS_LOADING"; // estado de carga

/*-- perform a request of https://hn.algolia.com/api/v1/search?tags='tag' -- */
/*-- To get the 6 recent posts --*/
// export function fetchRecentPosts() {
//   return async function (dispatch) {
//     // hacemos la peticion de los ultimos posts-->

//     try {
//       // obtenermos el array de IDs, desestructurando data de la respuesta
//       const { data: storyID } = await axios.get(urlRecentPosts);

//       // Obtenemos los primeros 6 ids
//       const recentIds = storyID.slice(0, 6);

//       // Mapeamos cada ID a una peticion de axios para obtener las promesas
//       const storyPromises = recentIds.map((id) =>
//         axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
//       );

//       // ejecutamos todas las promesas y conseguimos los datos
//       const stories = await Promise.all(storyPromises);
//       const results = stories.map((response) => response.data);

//       // ENVIAMOS los datos al REDUCER -->
//       dispatch({
//         type: SET_RECENT_POSTS,
//         payload: results,
//       });
//       console.log("Resultados: ", results);
//     } catch (error) {
//       console.log("Error en post recientes: ", error);
//     }
//   };
// }
export function fetchRecentPosts() {
  return async function (dispatch) {
    try {
      // Filtramos por tags=story para evitar comentarios y pedimos los 6 más recientes
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=6`
      );

      console.log("Post recientes desde Algolia: ", response.data.hits);

      dispatch({
        type: SET_RECENT_POSTS,
        payload: response.data.hits,
      });
    } catch (error) {
      console.error("Error en post recientes Algolia: ", error);
    }
  };
}
/*-------------fin fetchRecentPosts--------------------- */

/*-------------fetchResultPosts--------------------- */
export function fetchResultPosts({ query }) {
  return async function (dispatch) {
    // activamos el estado de carga
    dispatch({
      type: SET_RESULTS_LOADING,
      payload: true, // isLoading
    });

    // hacemos la peticion de busqueda
    try {
      // la api de Algolia devuelve un objeto {hits} con la respuesta
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`,
        {
          // ESTO ES VITAL: Evita que se trate como JSONP y pide JSON puro
          params: { callback: undefined },
          headers: { Accept: "application/json" },
        }
      );

      // logeamos la respuesta
      console.log("Respuesta a la busqueda: ", response.data.hits);

      // ENVIAMOS los datos al REDUCER
      dispatch({
        type: SET_RESULT_POSTS,
        payload: response.data.hits,
      });
    } catch (error) {
      // logeamos el error
      console.log("Error en la busqueda: ", error);

      // EN CASO DE ERROR, Apagamos el spinner manualmente
      dispatch({
        type: SET_RESULTS_LOADING,
        payload: false,
      });
    } finally {
      //  Apaga el spinner siempre, haya éxito o error
      dispatch({ type: SET_RESULTS_LOADING, payload: false });
    }
  };
}

/*-------------fin fetchResultPosts--------------------- */

/* ---------- inicio setSortBy */
export function setSortBy(criterion) {
  return {
    type: "SET_SORT_BY",
    payload: criterion,
  };
}
/* ---------- fin setSortBy */
