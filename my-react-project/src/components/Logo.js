import React from "react";
import cosmica from "../images/cosmica.png";

const Logo = () => {
  return (
    <section>
      <img
        className="logo-image"
        src={cosmica}
        alt="Logo Cósmica"
        Title="Hola, soy Cósmica"
      />
    </section>
  );
};

export default Logo;