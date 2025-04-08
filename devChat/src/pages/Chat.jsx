import React from "react";

const Chat = (props) => {
  //fake messages data
  const messages = [
    {
      authorId: 1,
      authorName: "rogerio",
      message: "olá, onde vende solda caustica",
    },
    {
      authorId: 2,
      authorName: "calos",
      message: "olá, vendemos mas nao e comestivel",
    },
    {
      authorId: 3,
      authorName: "rogerio",
      message: "entao feche essa espelunca",
    },
  ];
  return (
    <div
      id="chat-container"
      className="bg-dark rounded-4 p-3 d-flex flex-column"
      style={{ width: "400px", height: "600px" }}
    >
      <div
        id="chat-body"
        className="overflow-y-auto gap-3 h-100 d-flex flex-column"
      >
        <div className=" align-self-start">
          <button
            className=" btn-close btn-close-white"
            id="send-button"
            onClick={() => props.visibility(false)}
          ></button>
        </div>
        {messages.map((message, index) => (
          <div
            className="align-self-start bg-black rounded-3 p-2 me-5"
            key={index}
          >
            <div id="message-author" className="fw-bold text-capitalize">{message.authorName}</div>
            <div id="message-text">{message.message}</div>
          </div>
        ))}
      </div>
      <div id="chat-footer" className="input-group">
        <input
          className="form-control border-0"
          type="text"
          id="msgUser"
          name="msgUser"
          placeholder="Mensagem"
          onClick={() => {
            document.getElementById("msgUser").value();
          }}
        />
        <span className="input-group-text " id="basic-addon1">
          <i className="bi bi-send"></i>
        </span>
      </div>
    </div>
  );
};

export default Chat;
