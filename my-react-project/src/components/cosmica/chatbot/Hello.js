import React from "react";
import Lottie from "react-lottie";
import Logo from "../../details/Logo";

const Hello = (props) => {
  const handleMoment = () => {
    props.playAnimation();
    props.handleChatbotField(2);
  };
  const handleName = (event) => {
    let name = event.target.value;
    props.handleGroupName(name);
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
          {/* <div className="chat-divText"> */}
          <p className="chat-divText">
            Bienvenidas Compañeras. Soy Cósmica, y si habéis llegado aquí es
            porque habéis oído hablar de mi juego de mesa. ¿Verdad?
          </p>
          <p className="chat-divText">
            Antes de empezar, me encantaría saber cómo os llamáis. Podéis
            escoger un nombre de equipo si os apetece :)
          </p>
          {/* </div> */}
          <div className="avatar-left">
            <Logo section="hello-img-section" img="hello-img-section-detail" />
            <p className="avatar-left-text">Compañeras</p>
          </div>
          <section className="chat-response">
            <input
              className="input"
              onChange={handleName}
              type="text"
              placeholder="Compañeras"
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

export default Hello;
