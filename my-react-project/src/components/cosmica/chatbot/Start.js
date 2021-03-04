import React from "react";
import { Link } from "react-router-dom";

const Start = (props) => {
  const handleMoment = () => {
    props.handleChatbotField(4);
  };
  return (
    <section>
      <p>{`${props.groupName}, necesitáis un juego de mesa`}</p>
      <p>Necesitas un juego de mesa</p>
      <Link to="/instrucciones" title="Instrucciones">
        Instrucciones
      </Link>
      <Link onClick={handleMoment} to="/jugar" title="Jugar a Cósmica">
        Jugar
      </Link>
    </section>
  );
};

export default Start;
