// acciones

import axios from "axios";

/*------------------Fetch Recent Posts------------------------------------- */

// url posts mas recientes ->
const urlRecentPosts = "https://hacker-news.firebaseio.com/v0/newstories.json";
// url dato post recientes por id
const urlRecentPost = "https://hacker-news.firebaseio.com/v0/item/${id}.json";

// definimos el tipo como una constante
export const SET_RECENT_POSTS = "SET_RECENT_POSTS";

/*-- perform a request of https://hn.algolia.com/api/v1/search?tags='tag' -- */
export function fetchRecentPosts() {
  return async function (dispatch) {
    // hacemos la peticion de los ultimos posts-->

    try {
      // obtenermos el array de IDs, desestructurando data de la respuesta
      const { data: storyID } = await axios.get(urlRecentPosts);

      // Obtenemos los primeros 6 ids
      const recentIds = storyID.slice(0, 6);

      // Mapeamos cada ID a una peticion de axios para obtener las promesas
      const storyPromises = recentIds.map((id) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      );

      // ejecutamos todas las promesas y conseguimos los datos
      const stories = await Promise.all(storyPromises);
      const results = stories.map((response) => response.data);

      // ENVIAMOS los datos al REDUCER -->
      dispatch({
        type: SET_RECENT_POSTS,
        payload: results,
      });
      console.log("Resultados: ", results);
    } catch (error) {
      console.log("Error en post recientes: ", error);
    }
  };
}
/*-------------fin fetchRecentPosts--------------------- */
