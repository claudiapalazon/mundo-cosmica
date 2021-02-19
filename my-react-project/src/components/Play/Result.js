import React from "react";
import InfoResult from "./result/InfoResult";

const Result = (props) => {
  return (
    <section>
      <InfoResult correct={props.correct} />
      <button onClick={() => props.handleNextQuestion(props.correct)}>
        Siguiente Pregunta
      </button>
      <button>¡Hemos llegado!</button>
    </section>
  );
};

export default Result;
