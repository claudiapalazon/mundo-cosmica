import React from "react";
import InfoResult from "./result/InfoResult";

const Result = (props) => {
  return (
    <section className="result">
      <InfoResult correct={props.correct} />
      <button
        className="result-nextButton"
        onClick={() => props.handleNextQuestion(props.correct)}
      >
        Siguiente Pregunta
      </button>
      <button className="result-finishButton">¡Hemos llegado!</button>
    </section>
  );
};

export default Result;
