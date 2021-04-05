import React from "react";
import Hello from "./chatbot/Hello";
import Project from "./chatbot/Project";
import Start from "./chatbot/Start";
import Play from "../Play";
import Reset from "../Reset";

const Chatbot = (props) => {
  if (props.chatbotField === 1) {
    return (
      <>
        <Reset
          handleFirstMessage={props.handleFirstMessage}
          handleChatbotField={props.handleChatbotField}
          handleQuestions={props.handleQuestions}
        />
        <Hello
          handleChatbotField={props.handleChatbotField}
          groupName={props.groupName}
          handleGroupName={props.handleGroupName}
        />
      </>
    );
  } else if (props.chatbotField === 2)
    return (
      <>
        <Reset
          handleFirstMessage={props.handleFirstMessage}
          handleChatbotField={props.handleChatbotField}
          handleQuestions={props.handleQuestions}
        />
        <Project handleChatbotField={props.handleChatbotField} />{" "}
      </>
    );
  else if (props.chatbotField === 3)
    return (
      <>
        <Reset
          handleFirstMessage={props.handleFirstMessage}
          handleChatbotField={props.handleChatbotField}
          handleQuestions={props.handleQuestions}
        />
        <Start
          handleChatbotField={props.handleChatbotField}
          groupName={props.groupName}
        />
      </>
    );
  else if (props.chatbotField === 4)
    return (
      <>
        <Reset
          handleFirstMessage={props.handleFirstMessage}
          handleChatbotField={props.handleChatbotField}
          handleQuestions={props.handleQuestions}
        />
        <Play arr={props.arr} handleQuestions={props.handleQuestions} />
      </>
    );
};

export default Chatbot;
