// import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import questions from "../services/questions.json";
import Instructions from "./Instructions";
// import Play from "./Play";
import Cosmica from "./Cosmica";
import Header from "./Header";
import "../stylesheets/App.scss";
import Footer from "./Footer";

function App() {
  let arr = JSON.parse(JSON.stringify(questions));
  const [firstMessage, setFirstMessage] = useState(true);
  const [arrFiltered, setQuestion] = useState(arr);
  const [chatbotField, setChatbotField] = useState(1);
  const [groupName, setGroupName] = useState("Compañeras");

  const handleFirstMessage = (option) => {
    setFirstMessage(option);
  };

  const handleQuestions = () => {
    let arrQuestions = JSON.parse(JSON.stringify(questions));
    setQuestion(arrQuestions);
  };

  const handleChatbotField = (number) => {
    setChatbotField(number);
  };

  const handleGroupName = (name) => {
    setGroupName(name);
  };

  return (
    <>
      <div id="App">
        <Header
          disableAutoFocus
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
        />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/">
              <Cosmica
                chatbotField={chatbotField}
                handleChatbotField={handleChatbotField}
                groupName={groupName}
                handleGroupName={handleGroupName}
                firstMessage={firstMessage}
                handleFirstMessage={handleFirstMessage}
                arr={arrFiltered}
                handleQuestions={handleQuestions}
              />
            </Route>
            <Route path="/quienes-somos">
              <Instructions />
            </Route>
            {/* <Route path="/jugar">
              <Play arr={arrFiltered} handleQuestions={handleQuestions} />
            </Route> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
