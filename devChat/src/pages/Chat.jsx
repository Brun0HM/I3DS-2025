import React, { useEffect, useRef, useState } from "react";

const Chat = ({ socket, onLeave }) => {
  const { conn: connection, username } = socket;
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    const handleReceiveMessage = (user, message) => {
      setMessages((prev) => [...prev, { author: user, text: message }]);
    };

    connection.off("ReceiveMessage");
    connection.on("ReceiveMessage", handleReceiveMessage);

    return () => {
      connection.off("ReceiveMessage", handleReceiveMessage);
    };
  }, [connection]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const message = inputRef.current.value.trim();
    if (!message) return;

    try {
      await connection.invoke("SendMessage", username, message);
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
    }

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div
      id="chat-container"
      className="bg-dark rounded-4 p-3 d-flex flex-column fundinho"
    >
      <div
        id="chat-body"
        className="overflow-auto flex-grow-1 d-flex flex-column gap-3"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${
              msg.author === username
                ? "align-self-end ms-5 bg-danger"
                : "align-self-start me-5 bg-white"
            } rounded-3 p-2`}
          >
            <div className="message-author fw-bold text-dark">{msg.author}</div>
            <div className="message-text text-dark">{msg.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div id="chat-footer" className="input-group mt-3">
        <input
          autoFocus
          ref={inputRef}
          className="form-control text-dark"
          type="text"
          placeholder="Digite sua mensagem..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <span className="input-group-text">
          <button className="btn" onClick={handleSend}>
            <i className="bi bi-send"></i>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Chat;