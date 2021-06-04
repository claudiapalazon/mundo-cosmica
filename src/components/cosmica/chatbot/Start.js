import React from "react";
import Lottie from "react-lottie";
import Logo from "../../details/Logo";
import pdf from "./data/Instrucciones.pdf";

const Start = (props) => {
  const handleMoment = () => {
    props.handleChatbotField(5);
  };
  return (
    <section className="chat">
      <div className="avatar">
        <Logo section="hello-img-section" img="hello-img-section-detail" />
        <p className="avatar-text">Cósmica</p>
      </div>
      {props.seconds ? (
        <div className="chat-load">
          <Lottie options={props.options} height={40} width={40} />
        </div>
      ) : (
        <div>
          <p className="chat-divText">
            Importante, no perdáis de vista vuestra misión: ¡Llegar todas vivas
            al final del tablero!
          </p>
          <p className="chat-divText">
            Si lo necesitáis, podéis echar un vistazo a las instrucciones antes
            de empezar.
          </p>
          <div className="avatar-left">
            <Logo section="hello-img-section" img="hello-img-section-detail" />
            <p className="avatar-left-text">{props.groupName}</p>
          </div>
          <section className=" chat-response">
            <a
              href={pdf}
              title="Descargar instrucciones"
              alt="Descargar instrucciones"
              download="Instrucciones Cósmica"
              className="button-instructions"
            >
              Descargar Instrucciones
            </a>
            <button className="button" onClick={handleMoment}>
              Jugar
            </button>
          </section>
        </div>
      )}
    </section>
  );
};

export default Start;
