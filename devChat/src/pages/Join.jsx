import React, { useRef } from "react";
import * as signalR from "@microsoft/signalr";

const Join = ({ setSocket, onJoin }) => {
  const usernameRef = useRef(null);

  const handleJoin = async () => {
    const username = usernameRef.current.value.trim();
    if (username.length < 2) {
      alert("Digite um nome válido");
      return;
    }

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5139/chatHub", { withCredentials: true })
      .withAutomaticReconnect()
      .build();

    try {
      await connection.start();
      await connection.invoke("SetUsername", username);
      setSocket({ conn: connection, username });
      onJoin();
    } catch (err) {
      console.error("Erro ao conectar:", err);
      alert("Falha ao conectar ao servidor.");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text">devChat</h1>
      <div className="p-4 d-flex rounded flex-column justify-content-center align-items-center bg-dark">
        <h3>Bem-vindo ao devChat!</h3>
        <input
          ref={usernameRef}
          className="bg-dark border-0 border-bottom text-light"
          type="text"
          placeholder="Nome"
          style={{ height: "38px" }}
          onKeyDown={(e) => e.key === "Enter" && handleJoin()}
        />
        <button
          className="mt-3 rounded-2 button"
          onClick={handleJoin}
          style={{ width: "200px" }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;
