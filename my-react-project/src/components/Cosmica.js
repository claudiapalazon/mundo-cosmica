import React, { useState } from "react";
import animationData from "./animations/wait.json";
import Chatbot from "./cosmica/Chatbot";
import FirstMessage from "./cosmica/FirstMessage";
import Social from "./details/Social";
import Reset from "./details/Reset";

const Cosmica = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [seconds, setSeconds] = useState(false);
  const playAnimation = () => {
    setSeconds(true);
    console.log("paso por aqui");
    setTimeout(() => {
      setSeconds(false);
    }, 4000);
  };

  return (
    <>
      <Social />
      <article className="home">
        <div className="home-image scale-up-hor-left"></div>

        {props.firstMessage ? (
          <FirstMessage
            playAnimation={playAnimation}
            handleFirstMessage={props.handleFirstMessage}
          />
        ) : (
          <div className="home-chatbot">
            <Reset
              handleFirstMessage={props.handleFirstMessage}
              handleChatbotField={props.handleChatbotField}
              handleQuestions={props.handleQuestions}
            />
            <Chatbot
              seconds={seconds}
              playAnimation={playAnimation}
              options={defaultOptions}
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
