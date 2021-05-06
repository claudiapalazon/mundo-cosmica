import React from "react";
import Hello from "./chatbot/Hello";
import Project from "./chatbot/Project";
import Start from "./chatbot/Start";
import Play from "../Play";
import Woman from "./chatbot/Woman";

const Chatbot = (props) => {
  if (props.chatbotField === 1) {
    return (
      <Hello
        seconds={props.seconds}
        playAnimation={props.playAnimation}
        options={props.options}
        handleChatbotField={props.handleChatbotField}
        groupName={props.groupName}
      />
    );
  } else if (props.chatbotField === 2)
    return (
      <Project
        seconds={props.seconds}
        playAnimation={props.playAnimation}
        options={props.options}
        groupName={props.groupName}
        handleChatbotField={props.handleChatbotField}
        handleGroupName={props.handleGroupName}
      />
    );
  else if (props.chatbotField === 3)
    return (
      <Woman
        seconds={props.seconds}
        playAnimation={props.playAnimation}
        options={props.options}
        handleChatbotField={props.handleChatbotField}
        groupName={props.groupName}
      />
    );
  else if (props.chatbotField === 4)
    return (
      <Start
        seconds={props.seconds}
        playAnimation={props.playAnimation}
        options={props.options}
        handleChatbotField={props.handleChatbotField}
        groupName={props.groupName}
      />
    );
  else if (props.chatbotField === 5)
    return <Play arr={props.arr} handleQuestions={props.handleQuestions} />;
};

export default Chatbot;
