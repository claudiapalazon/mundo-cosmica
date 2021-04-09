import React from "react";
import Lottie from "react-lottie";
import Logo from "../../details/Logo";
import pdf from "./data/Instrucciones.pdf";

const Start = (props) => {
  const handleMoment = () => {
    props.handleChatbotField(4);
  };
  return (
    <>
      {/* <Logo /> */}
      {props.seconds ? (
        <Lottie options={props.options} height={50} width={50} />
      ) : (
        <section>
          <p>{`${props.groupName}, necesitáis un juego de mesa`}</p>
          <a href={pdf} download="Instrucciones Cósmica">
            Descargar
          </a>
          <button onClick={handleMoment}>Jugar</button>
        </section>
      )}
    </>
  );
};

export default Start;
