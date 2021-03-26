import React from "react";
import logo from "../../images/cosmica.png";

const FirstMessage = (props) => {
  const handleMoment = () => {
    props.handleFirstMessage();
  };

  return (
    <section className="home-firstmessage">
      <div className="home-firstmessage_logo shadow-drop-center">
        <img
          className="home-firstmessage_logo-image"
          src={logo}
          alt="Logo de Cósmica"
          title="Hola, Soy Cósmica"
        />
      </div>
      <p className="home-firstmessage_text">Bienvenidas Compañeras</p>
      <button className="home-firstmessage_button" onClick={handleMoment}>
        Empezar
      </button>
    </section>
  );
};

export default FirstMessage;
