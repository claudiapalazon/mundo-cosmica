import React from "react";

const Questions = (props) => {
  return (
    <section>
      <p>{props.arr[props.currentQuestion].questionText}</p>
      <div>
        {props.arr[props.currentQuestion].answerOptions.map(
          (answerOption, index) => (
            <button
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
