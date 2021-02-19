import React, { useState } from "react";
import Quiz from "./Play/Quiz";
import Result from "./Play/Result";
// import { Route, Switch } from "react-router-dom";

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
        <Quiz
          showScore={showScore}
          arr={arr}
          currentQuestion={currentQuestion}
          disabled={disabled}
          handleAnswerButtonClick={handleAnswerButtonClick}
        />
        <Result
          showScore={showScore}
          handleNextQuestion={handleNextQuestion}
          correct={correct}
        />
      </section>
    </>
  );
};

export default Play;
