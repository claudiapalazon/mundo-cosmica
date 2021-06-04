import React from "react";
import Lottie from "react-lottie";
import Logo from "../../details/Logo";

const Woman = (props) => {
  const handleMoment = () => {
    props.playAnimation();
    props.handleChatbotField(4);
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
          <p className="chat-divText">{`${props.groupName}, me gustaría explicaros algo antes de empezar...`}</p>
          <p className="chat-divText">
            Como veréis, os hablo en femenino, el motivo es porque a partir de
            ahora nos pondremos en la piel de las mujeres, por lo que TODAS
            SEREMOS MUJERES.
          </p>
          <p className="chat-divText">¿Estáis preparadas?</p>
          <div className="avatar-left">
            <Logo section="hello-img-section" img="hello-img-section-detail" />
            <p className="avatar-left-text">{props.groupName}</p>
          </div>
          <section className="chat-response">
            <button className="button" onClick={handleMoment}>
              ¡A por ello!
            </button>
          </section>
        </div>
      )}
    </section>
  );
};

export default Woman;
