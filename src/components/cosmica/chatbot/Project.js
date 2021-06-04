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
            En esta experiencia, es importante vuestra participación como
            equipo, ya que será un recorrido activo y cooperativo donde aprender
            y crecer juntas.
          </p>
          <p className="chat-divText">
            Para ello, podéis escoger un nombre de equipo con el que luchar. ¿Lo
            tenéis?
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
              placeholder="Escribid aquí vuestro nombre de equpo (opcional)"
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
