import React from "react";

const Hello = (props) => {
  const handleMoment = () => {
    props.handleChatbotField(2);
  };
  const handleName = (event) => {
    let name = event.target.value;
    props.handleGroupName(name);
  };

  return (
    <section>
      <p>Este es el párrafo de bienvenida</p>
      <input onChange={handleName} type="text" />
      <button onClick={handleMoment}>Siguiente</button>
    </section>
  );
};

export default Hello;
