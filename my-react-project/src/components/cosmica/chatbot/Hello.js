import React from "react";

const Hello = (props) => {
  const handleMoment = () => {
    props.handleChatbotField(2);
  };
  const handleMoment3 = () => {
    props.handleChatbotField(3);
  };
  const handleName = (event) => {
    let name = event.target.value;
    props.handleGroupName(name);
  };

  return (
    <section>
      <p>Este es el párrafo de bienvenida</p>
      <input onChange={handleName} type="text" />
      <button onClick={handleMoment3}>Si!</button>
      <button onClick={handleMoment}>No</button>
    </section>
  );
};

export default Hello;