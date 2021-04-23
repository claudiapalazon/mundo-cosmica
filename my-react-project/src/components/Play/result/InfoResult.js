import React from "react";

const InfoResult = (props) => {
  let isCorrect = props.correct ? "¡Has acertado!" : "Ups.. ¡Has fallado!";
  let whatColor = props.correct ? "result-true" : "result-false";

  return (
    <article>
      <p className={whatColor}>{isCorrect}</p>
    </article>
  );
};

export default InfoResult;
