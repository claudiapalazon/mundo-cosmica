import React from "react";

const Project = (props) => {
  const handleMoment = () => {
    props.handleChatbotField(3);
  };

  return (
    <section>
      <p>En qué consiste Cósmica</p>
      <button onClick={handleMoment}>Siguiente</button>
    </section>
  );
};

export default Project;
