// import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import questions from "../services/questions.json";
import Instructions from "./Instructions";
import Play from "./Play";
import Cosmica from "./Cosmica";
import Header from "./Header";

function App() {
  let arr = JSON.parse(JSON.stringify(questions));
  const [arrFiltered, setQuestion] = useState(arr);

  const handleQuestions = () => {
    console.log("entro aqui");
    let arrQuestions = JSON.parse(JSON.stringify(questions));
    setQuestion(arrQuestions);
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Cosmica />
        </Route>
        <Route path="/instrucciones">
          <Instructions />
        </Route>
        <Route path="/jugar">
          <Play arr={arrFiltered} handleQuestions={handleQuestions} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
