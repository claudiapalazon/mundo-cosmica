import React from "react";
import Lottie from "react-lottie";

const Project = (props) => {
  const handleMoment = () => {
    props.playAnimation();
    props.handleChatbotField(3);
  };

  return (
    <>
      {props.seconds ? (
        <Lottie options={props.options} height={50} width={50} />
      ) : (
        <section>
          <p>En qué consiste Cósmica</p>
          <button onClick={handleMoment}>Siguiente</button>
        </section>
      )}
    </>
  );
};

export default Project;
