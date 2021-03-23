import React from "react";

const FirstMessage = (props) => {
  const handleMoment = () => {
    props.handleFirstMessage();
  };

  return (
    <section>
      <p>Bienvenidas, compañeras Cósmicas</p>
      <button onClick={handleMoment}>Iniciar Chat</button>
    </section>
  );
};

export default FirstMessage;
