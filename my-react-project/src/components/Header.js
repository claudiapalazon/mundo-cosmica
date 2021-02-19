import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" title="Cósmica">
        Cosmica
      </Link>
      <Link to="/instrucciones" title="Instrucciones">
        Instrucciones
      </Link>
      <Link to="/jugar" title="Jugar a Cósmica">
        Jugar
      </Link>
    </header>
  );
};

export default Header;
