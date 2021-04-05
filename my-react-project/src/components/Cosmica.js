import React from "react";
import Chatbot from "./cosmica/Chatbot";
import FirstMessage from "./cosmica/FirstMessage";

const Cosmica = (props) => {
  return (
    <article className="home">
      <div className="home-image scale-up-hor-left"></div>
      {props.firstMessage ? (
        <FirstMessage handleFirstMessage={props.handleFirstMessage} />
      ) : (
        <div className="home-chatbot">
          <Chatbot
            handleFirstMessage={props.handleFirstMessage}
            chatbotField={props.chatbotField}
            handleChatbotField={props.handleChatbotField}
            groupName={props.groupName}
            handleGroupName={props.handleGroupName}
            arr={props.arr}
            handleQuestions={props.handleQuestions}
          />
        </div>
      )}
    </article>
  );
};

export default Cosmica;
