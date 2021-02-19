import React from "react";

const InfoResult = (props) => {
  let isCorrect = props.correct ? "¡Has acertado!" : "Ups.. ¡Has fallado!";
  return (
    <article>
      <p>{isCorrect}</p>
    </article>
  );
};

export default InfoResult;
