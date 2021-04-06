import React from "react";
import Chatbot from "./cosmica/Chatbot";
import FirstMessage from "./cosmica/FirstMessage";
import Social from "./cosmica/Social";
import Reset from "./Reset";

const Cosmica = (props) => {
  return (
    <>
      <Social />
      <article className="home">
        <div className="home-image scale-up-hor-left"></div>

        {props.firstMessage ? (
          <FirstMessage handleFirstMessage={props.handleFirstMessage} />
        ) : (
          <div className="home-chatbot">
            <Reset
              handleFirstMessage={props.handleFirstMessage}
              handleChatbotField={props.handleChatbotField}
              handleQuestions={props.handleQuestions}
            />
            <Chatbot
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
    </>
  );
};

export default Cosmica;
