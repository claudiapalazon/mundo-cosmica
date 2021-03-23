import React from "react";
import cosmica from "../images/cosmica.png";

const Elements = () => {
  return (
    <section>
      <img
        className="logo-image"
        src={cosmica}
        alt="Logo Cósmica"
        Title="Hola, soy Cósmica"
      />
      {/* <p>El universo de la mujer</p>
      <ul>
        <li>Instagram</li>
        <li>Facebook</li>
      </ul> */}
    </section>
  );
};

export default Elements;
