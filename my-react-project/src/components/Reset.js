import React from "react";
import { FaRedoAlt } from "react-icons/fa";

const Reset = (props) => {
  const handleMoment = () => {
    props.handleFirstMessage(true);
    props.handleChatbotField(1);
    props.handleQuestions();
  };

  return (
    <button className="reset" onClick={handleMoment}>
      <FaRedoAlt className="reset-logo" />
    </button>
  );
};

export default Reset;
