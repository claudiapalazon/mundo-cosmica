import React from "react";

const Quiz = (props) => {
  return (
    <section>
      <h1>Holi</h1>
      <div>
        {props.showScore ? (
          <p>Holiiii me he acabado</p>
        ) : (
          <p> {props.arr[props.currentQuestion].questionText}</p>
          // <p>jeje</p>
        )}
      </div>
      <div>
        {props.showScore
          ? ""
          : props.arr[props.currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  disabled={props.disabled}
                  onClick={() =>
                    props.handleAnswerButtonClick(answerOption.isTrue)
                  }
                >
                  {answerOption.responseText}
                </button>
              )
            )}
      </div>
    </section>
  );
};

export default Quiz;
