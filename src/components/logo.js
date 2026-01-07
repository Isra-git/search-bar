import React from "react";

import { CiGlobe } from "react-icons/ci";

const Logo = () => {
  return (
    <div className="logo-main">
      <span className="logo-title">Hacker</span>
      <a href="#">
        <CiGlobe size="70px" color="darkturquoise" />
      </a>
      <span className="logo-title">News</span>
    </div>
  );
};

export default Logo;
