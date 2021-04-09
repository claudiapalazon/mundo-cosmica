import React from "react";
import cosmica from "../../images/cosmica.png";

const Logo = (props) => {
  return (
    <section className={props.section}>
      <img
        className={props.img}
        src={cosmica}
        alt="Logo Cósmica"
        title="Hola, soy Cósmica"
      />
    </section>
  );
};

export default Logo;
