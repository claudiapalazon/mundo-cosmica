import React from "react";

const Mision = (props) => {
  const handleMoment = () => {
    props.handleChatbotField(1);
  };

  return (
    <section>
      <p>{`${props.groupName}, estáis en la lucha`}</p>
      <button onClick={handleMoment}>Reiniciar Cósmica</button>
    </section>
  );
};

export default Mision;
