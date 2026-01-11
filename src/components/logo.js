import React from "react";

import { CiGlobe } from "react-icons/ci";

const Logo = (props) => {
  // tamaño del logo dinamico
  let logoSize = props.size ? props.size : 70;
  return (
    <div className="logo-main">
      <span className="logo-title">Hacker</span>
      <a href="#">
        <CiGlobe size={logoSize} color="darkturquoise" />
      </a>
      <span className="logo-title">News</span>
    </div>
  );
};

export default Logo;
