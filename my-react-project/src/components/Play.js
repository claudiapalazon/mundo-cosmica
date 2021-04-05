import React, { useState } from "react";
import Logo from "./Logo";
import Quiz from "./Play/Quiz";
import Result from "./Play/Result";

const Play = (props) => {
  let arr = props.arr;
  let aleatorio = Math.floor(Math.random() * arr.length);

  const [currentQuestion, setCurrentQuestion] = useState(aleatorio);
  const [showScore, setShowScore] = useState(false);
  const [correct, isCorrect] = useState(false);
  const [showPage, isAnswered] = useState(false);

  const handleNextQuestion = (correct) => {
    console.log(arr);
    if (correct === true) {
      arr.splice(currentQuestion, 1);
      isCorrect(false);
    }
    if (arr.length < 1) {
      setShowScore(true);
      setCurrentQuestion(1);
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
    isAnswered(false);
  };

  const handleQuestions2 = () => {
    setShowScore(false);
  };

  const handleAnswerButtonClick = (isTrue) => {
    isAnswered(true);
    if (isTrue === "true") {
      isCorrect(true);
    } else {
      isCorrect(false);
    }
  };

  return (
    <>
      <section>
        {showPage ? (
          <Result
            showScore={showScore}
            handleNextQuestion={handleNextQuestion}
            correct={correct}
          />
        ) : (
          <Quiz
            showScore={showScore}
            arr={arr}
            currentQuestion={currentQuestion}
            handleAnswerButtonClick={handleAnswerButtonClick}
            handleQuestions={handleQuestions2}
          />
        )}
      </section>
    </>
  );
};

export default Play;
