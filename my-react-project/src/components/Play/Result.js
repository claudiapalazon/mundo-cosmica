import React from "react";

const Result = (props) => {
  return (
    <section>
      <div>
        {props.showScore ? (
          ""
        ) : (
          <button onClick={() => props.handleNextQuestion(props.correct)}>
            Siguiente Pregunta
          </button>
        )}
      </div>
      <button>¡Hemos llegado!</button>
    </section>
  );
};

export default Result;
