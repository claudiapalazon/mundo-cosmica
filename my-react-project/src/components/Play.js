import React, { useState } from "react";

const Play = (props) => {
  let arr = props.arr;
  let aleatorio = Math.floor(Math.random() * arr.length);

  const [currentQuestion, setCurrentQuestion] = useState(aleatorio);
  const [showScore, setShowScore] = useState(false);
  const [disabled, isDisabled] = useState(false);
  const [correct, isCorrect] = useState(false);

  const handleNextQuestion = (correct) => {
    console.log(arr);
    if (correct === true) {
      arr.splice(currentQuestion, 1);
      isCorrect(false);
    }
    if (arr.length < 1) {
      setShowScore(true);
      setCurrentQuestion(1);
      isDisabled(false);
      isCorrect(false);
      props.handleQuestions();
    }
    if (arr.length >= 1) {
      let aleatory = Math.floor(Math.random() * arr.length);
      if (aleatory === currentQuestion) {
        aleatory = Math.floor(Math.random() * arr.length);
      }
      setCurrentQuestion(aleatory);
    }
    isDisabled(false);
  };

  const handleAnswerButtonClick = (isTrue) => {
    if (isTrue === "true") {
      alert();
      isCorrect(true);
    } else {
      isCorrect(false);
    }
    isDisabled(true);
  };

  return (
    <>
      <section>
        <h1>Holi</h1>
        <div>
          {showScore ? (
            <p>Holiiii me he acabado</p>
          ) : (
            <p> {arr[currentQuestion].questionText}</p>
            // <p>jeje</p>
          )}
        </div>
        <div>
          {showScore
            ? ""
            : arr[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  disabled={disabled}
                  onClick={() => handleAnswerButtonClick(answerOption.isTrue)}
                >
                  {answerOption.responseText}
                </button>
              ))}
        </div>
        <div>
          {showScore ? (
            ""
          ) : (
            <button onClick={() => handleNextQuestion(correct)}>
              Siguiente Pregunta
            </button>
          )}
        </div>
        <button>¡Hemos llegado!</button>
      </section>
    </>
  );
};

export default Play;
