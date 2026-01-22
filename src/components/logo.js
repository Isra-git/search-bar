import React from "react";

import { Link } from "react-router-dom";

import { CiGlobe } from "react-icons/ci";

const Logo = (props) => {
  // tamaño del logo dinamico
  let logoSize = props.size ? props.size : 70;
  return (
    <div className="logo-main">
      <span className="logo-title">Hacker</span>
      <Link to="/">
        <CiGlobe size={logoSize} color="darkturquoise" />
      </Link>
      <span className="logo-title">News</span>
    </div>
  );
};

export default Logo;
