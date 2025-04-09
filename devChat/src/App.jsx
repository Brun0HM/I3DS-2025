import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Join from "./pages/Join";
import Chat from "./pages/Chat";
import { useState } from "react";

function App() {
  const [chatVisible, setChatVisible] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <div
      id="App"
      className="m-0 p-0 bg-black vh-100 text-light d-flex justify-content-center align-items-center flex-column con"
    >
      {chatVisible ? (
        <Chat socket={socket} onLeave={() => setChatVisible(false)} />
      ) : (
        <Join setSocket={setSocket} onJoin={() => setChatVisible(true)} />
      )}
    </div>
  );
}

export default App;
