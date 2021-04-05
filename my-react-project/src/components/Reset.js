import React from "react";

const Reset = (props) => {
  const handleMoment = () => {
    props.handleFirstMessage(true);
    props.handleChatbotField(1);
    props.handleQuestions();
  };

  return (
    <section>
      <button onClick={handleMoment}>Reset</button>
    </section>
  );
};

export default Reset;
