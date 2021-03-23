import React from "react";
import Hello from "./chatbot/Hello";
import Project from "./chatbot/Project";
import Start from "./chatbot/Start";
import Mision from "./chatbot/Mision";

const Chatbot = (props) => {
  // if (props.chatbotField === 5) {
  //   <FirstMessage handleChatbotField={props.handleChatbotField} />;
  // }
  if (props.chatbotField === 1) {
    return (
      <Hello
        handleChatbotField={props.handleChatbotField}
        groupName={props.groupName}
        handleGroupName={props.handleGroupName}
      />
    );
  } else if (props.chatbotField === 2)
    return <Project handleChatbotField={props.handleChatbotField} />;
  else if (props.chatbotField === 3)
    return (
      <Start
        handleChatbotField={props.handleChatbotField}
        groupName={props.groupName}
      />
    );
  else if (props.chatbotField === 4)
    return (
      <Mision
        handleChatbotField={props.handleChatbotField}
        groupName={props.groupName}
      />
    );
};

export default Chatbot;
