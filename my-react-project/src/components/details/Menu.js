import React from "react";
import { Link } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

const MenuItem = (props) => {
  return (
    <>
      <Menu {...props}>
        <Link className="menu-item" to="/" title="Cósmica">
          Cósmica
        </Link>
        <Link
          className="menu-item"
          // target="_blank"
          to="/quienes-somos"
          title="Quiénes somos"
        >
          Quiénes somos
        </Link>
      </Menu>
    </>
  );
};

export default MenuItem;
