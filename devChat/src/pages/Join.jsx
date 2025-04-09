import React, { useRef } from "react";
import { io } from "socket.io-client";

const Join = (props) => {
  //hook
  const usernameRef = useRef(null);

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 2) {
      alert("Digite um nome válido");
      return;
    }

    //Criando a conexão com o socket
    const servidorSocket = await io.connect("http://192.168.10.123:3001");
    servidorSocket.emit("set_username", username);
    //abrindo a pagina de chat
    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
    <div className="text-center">
      <h1>devChat</h1>
      <div className="p-4 d-flex rounded flex-column justify-content-center align-items-center bg-dark">
        <h3>Bem-vindo ao devChat!</h3>
        <input
          ref={usernameRef}
          className=" bg-dark border-0 border-bottom bg-transparent text-light"
          type="text"
          id="message-input"
          placeholder="Nome"
          style={{ height: "38px" }}
          onKeyDown={(e) =>  (e.key == "Enter")  && handleSubmit()}
        />
        <button
          className="btn mt-1 btn-dark rounded-2"
          id="send-button"
          onClick={() => {
            handleSubmit();
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
