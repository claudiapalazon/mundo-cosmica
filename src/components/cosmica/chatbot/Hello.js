import React from "react";
import Lottie from "react-lottie";
import Logo from "../../details/Logo";

const Hello = (props) => {
  const handleMoment = () => {
    props.playAnimation();
    props.handleChatbotField(2);
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
            Bienvenidas Compañeras, mi nombre es Cósmica y voy a ser vuestra
            guía en este viaje feminista en el que recorreremos las opresiones
            de la mujer a lo largo de la historia.
          </p>
          <p className="chat-divText">
            Lo primero que debéis saber es que para embarcaros en esta aventura
            necesitáis el juego de mesa. Si aún no lo tenéis, lo podéis
            conseguir aquí:
          </p>
          <div className="avatar-left">
            <Logo section="hello-img-section" img="hello-img-section-detail" />
            <p className="avatar-left-text">{props.groupName}</p>
          </div>
          <section className="chat-response">
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
