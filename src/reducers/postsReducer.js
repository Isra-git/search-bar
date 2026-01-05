// almacen para los datos de los posts
// src/reducers/postsReducer.js
const INITIAL_STATE = {
  recentPosts: [],
  resultsPosts: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_RECENT_POSTS":
      return {
        ...state,
        recentPosts: action.payload,
      };
    default:
      return state;
  }
}
