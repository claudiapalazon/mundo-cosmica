import React from "react";
import Logo from "../details/Logo";

const FirstMessage = (props) => {
  const handleMoment = () => {
    props.playAnimation();
    props.handleFirstMessage(false);
  };

  return (
    <section className="home-firstmessage">
      <Logo
        section="home-firstmessage_logo shadow-drop-center"
        img="home-firstmessage_logo-image"
      />
      <p className="home-firstmessage_text">Bienvenidas Compañeras</p>
      <button className="home-firstmessage_button" onClick={handleMoment}>
        Empezar
      </button>
    </section>
  );
};

export default FirstMessage;
