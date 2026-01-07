import React from "react";

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

const Home = (props) => {
  return (
    <div className="app-wrapper">
      <div className="component-wapper">
        <Logo />
        <SearchBar />
        <RecentPosts />
      </div>
    </div>
  );
};
export default Home;
