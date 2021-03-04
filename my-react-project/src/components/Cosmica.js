import React from "react";
import Chatbot from "./cosmica/Chatbot";

const Cosmica = (props) => {
  return (
    <article>
      <p>Bienvenidas al universo de la mujer</p>
      <Chatbot
        chatbotField={props.chatbotField}
        handleChatbotField={props.handleChatbotField}
        groupName={props.groupName}
        handleGroupName={props.handleGroupName}
      />
    </article>
  );
};

export default Cosmica;
