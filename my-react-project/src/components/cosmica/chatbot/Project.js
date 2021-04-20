import React from "react";
import Lottie from "react-lottie";
import Logo from "../../details/Logo";

const Project = (props) => {
  const handleMoment = () => {
    props.playAnimation();
    props.handleChatbotField(3);
  };
  const handleName = (event) => {
    let name = event.target.value;
    props.handleGroupName(!name ? "Compañeras" : name);
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
            Como veréis, os hablo en femenino... el motivo es porque a partir de
            ahora nos pondremos en la piel de las mujeres, por lo que TODAS
            SEREMOS MUJERES.
          </p>
          <p className="chat-divText">
            Antes de empezar, necesitaré que escojáis un nombre de equipo con el
            que luchar a lo largo de esta experiencia.
          </p>
          <div className="avatar-left">
            <Logo section="hello-img-section" img="hello-img-section-detail" />
            <p className="avatar-left-text">{props.groupName}</p>
          </div>
          <section className="chat-response">
            <input
              className="input"
              onChange={handleName}
              type="text"
              placeholder="Escribid aquí vuestro nombre de equpo"
            />
            <button className="button" onClick={handleMoment}>
              Siguiente
            </button>
          </section>
        </div>
      )}
    </section>
  );
};

export default Project;
