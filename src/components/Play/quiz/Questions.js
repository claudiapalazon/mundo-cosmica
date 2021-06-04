import React from "react";

const Questions = (props) => {
  return (
    <section className="question">
      <p className="question-text">
        {props.arr[props.currentQuestion].questionText}
      </p>
      <div className="question-responses">
        {props.arr[props.currentQuestion].answerOptions.map(
          (answerOption, index) => (
            <button
              className="question-responses-response"
              key={index}
              onClick={() => props.handleAnswerButtonClick(answerOption.isTrue)}
            >
              {answerOption.responseText}
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default Questions;
