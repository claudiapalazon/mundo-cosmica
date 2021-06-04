import React from "react";

const Update = (props) => {
  return (
    <section>
      <p>No hay más preguntas</p>
      <button onClick={() => props.handleQuestions()}>Reiniciar</button>
    </section>
  );
};

export default Update;
