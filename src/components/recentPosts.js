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

  // mostramos los  6 posts mas recientes
  const renderRecentPosts = () => {
    return recentPosts.map((post, index) => {
      return (
        <div className="posts-post" key={post.id || index}>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </div>
      );
    });
  };

  return (
    <div className="recent-posts">
      <div className="recent-posts__wrapper">
        <div className="recent-posts__heading">Recent Posts</div>
        <div className="recent-posts__posts">{renderRecentPosts()}</div>
      </div>
    </div>
  );
};

export default RecentPosts;
