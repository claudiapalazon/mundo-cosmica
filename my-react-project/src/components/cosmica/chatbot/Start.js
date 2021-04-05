import React from "react";
import pdf from "./Instrucciones.pdf";

const Start = (props) => {
  const handleMoment = () => {
    props.handleChatbotField(4);
  };
  return (
    <section>
      <p>{`${props.groupName}, necesitáis un juego de mesa`}</p>
      <a href={pdf} download="Instrucciones Cósmica">
        Descargar
      </a>
      <button onClick={handleMoment}>Jugar</button>
    </section>
  );
};

export default Start;
