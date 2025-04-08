import React, { useRef } from "react";

const Join = (props) => {
  //hook
  const userNameRef = useRef(null);
  const handleSubmit = () => {
    const userName = userNameRef.current.value;
    !userName.trim() && alert("Digite um nome válido");

    const socket = new WebSocket("https://192.168.10.");
  };

  return (
    <div className="text-center">
      <h1>devChat</h1>
      <div className="p-4 d-flex rounded flex-column justify-content-center align-items-center bg-dark">
        <h3>Bem-vindo ao devChat!</h3>
        <input
          ref={userNameRef}
          className=" bg-dark border-0 border-bottom bg-transparent text-light"
          type="text"
          id="message-input"
          placeholder="Nome"
          style={{ height: "38px" }}
        />
        <button
          className="btn mt-1 btn-dark rounded-2"
          id="send-button"
          onClick={() => {
            handleSubmit();
            props.visibility(true);
          }}
          style={{ width: "200px" }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
