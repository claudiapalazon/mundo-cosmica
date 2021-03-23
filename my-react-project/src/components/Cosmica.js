import React from "react";
import Chatbot from "./cosmica/Chatbot";
import FirstMessage from "./cosmica/FirstMessage";

const Cosmica = (props) => {
  return (
    <article className="home">
      <div className="home-image"></div>
      {props.firstMessage ? (
        <FirstMessage handleFirstMessage={props.handleFirstMessage} />
      ) : (
        <div className="home-chatbot">
          <Chatbot
            chatbotField={props.chatbotField}
            handleChatbotField={props.handleChatbotField}
            groupName={props.groupName}
            handleGroupName={props.handleGroupName}
          />
        </div>
      )}
    </article>
  );
};

export default Cosmica;
