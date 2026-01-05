import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

// importamos las acciones
import * as actions from "../actions";

let RecentPosts = (props) => {
  //creamos el dispach, para disparar la accion
  const dispatch = useDispatch();

  // traemos los datos del store
  const recentPosts = useSelector((state) => state.posts.recentPosts);

  // Disparamos la accion al cargar el componente
  useEffect(() => {
    dispatch(actions.fetchRecentPosts());
  }, [dispatch]);

  return (
    <div className="recent-posts">
      <div className="recent-posts__wrapper">
        <div className="recent-posts__heading">Recent Posts</div>
        <ul className="recent-posts__posts">
          <li>recent post 0</li>
          <li>recent post 1</li>
          <li>recent post 2</li>
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;
