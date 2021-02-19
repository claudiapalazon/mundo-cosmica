import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Header = (props) => {
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/" title="Cósmica">
        Cósmica
      </Link>
      <Link
        className="menu-item"
        // target="_blank"
        to="/instrucciones"
        title="Instrucciones"
      >
        Instrucciones
      </Link>
      <Link className="menu-item" to="/jugar" title="Jugar a Cósmica">
        Jugar
      </Link>
    </Menu>
  );
};

export default Header;
