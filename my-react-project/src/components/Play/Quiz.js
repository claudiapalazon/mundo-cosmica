import React from "react";
import Questions from "./quiz/Questions";
import Update from "./quiz/Update";

const Quiz = (props) => {
  return (
    <section>
      {props.showScore ? (
        <Update handleQuestions={props.handleQuestions} />
      ) : (
        <Questions
          arr={props.arr}
          currentQuestion={props.currentQuestion}
          handleAnswerButtonClick={props.handleAnswerButtonClick}
        />
      )}
    </section>
  );
};

export default Quiz;
