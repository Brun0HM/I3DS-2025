import React, { useEffect, useRef, useState } from "react";
const Chat = (props) => {
  const [messagesList, setMessagesList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();
  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessagesList((current) => [...current, data]);
    });

    return () => props.socket.off("receive_message");
  }, [props.socket]);
  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messagesList]);

  const handleSubmit = () => {
    if (
      messagesList.some((message) => {
        if (message.authorId === "undefined") {
          window.location.reload();
          return true;
        }
        return false;
      })
    ) {
      return;
    }

    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message);

    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div
      id="chat-container"
      className="bg-dark rounded-4 p-3 d-flex flex-column"
    >
      <div
        id="chat-body"
        className="overflow-y-hidden h-100 d-flex flex-column gap-3"
      >
        {messagesList.map((message, index) => (
          <div
            className={`${
              message.authorId === props.socket.id
                ? "align-self-end ms-5 bg-danger"
                : "align-self-start me-5 bg-white"
            }  rounded-3 p-2`}
            key={index}
          >
            <div className="message-author fw-bold text-dark">
              {message.author}
            </div>
            <div className="message-text text-dark">{message.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div id="chat-footer" className="input-group">
        <input
          autoFocus
          ref={messageRef}
          id="msg-user"
          name="msg-user"
          className="form-control text-dark"
          type="text"
          placeholder="Digite sua mensagem..."
          onClick={() => {}}
          onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
        />
        <span className="input-group-text">
          <button
            className="btn m-0 input-group-text"
            id="basic-addon1"
            onClick={() => handleSubmit()}
          >
            <i className="bi bi-send"></i>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Chat;
