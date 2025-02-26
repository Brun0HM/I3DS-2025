import Profile from "./Components/profile/profile";
import Switch from "./Components//switch/Switch";
import Links from "./Components/links/Link";
import SocialLinks from "./Components/socialLinks/SocialLinks";
import Footer from "./Components/footer/Footer";
import Foto from "./img/ImagemAlvin.jpg";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [isLight, setIsLight] = useState();
  const troca = () => {
    setIsLight((previous) => !previous);
  };
  return (
    <div id="App" className={isLight && "light"}>
      <Profile fotoPerfil={Foto}>@Brun0</Profile>
      <Switch troca={troca} islight={isLight} />
      <ul>
        <Links link={"https://github.com/Brun0HM"}>GitHub</Links>
        <Links link={"https://www.instagram.com/fk.brun0/"}>Instagram</Links>
        <Links>Portifólio</Links>
        <Links>Me pague um café</Links>
      </ul>

      <div id="socialLinks">
        <SocialLinks link={"https://github.com/Brun0HM"} icon={"logo-github"} />
        <SocialLinks
          link={"https://www.instagram.com/fk.brun0/"}
          icon={"logo-instagram"}
        />
        <SocialLinks
          link={"https://steamcommunity.com/id/Brun069/"}
          icon={"logo-steam"}
        />
        <SocialLinks
          link={"https://www.linkedin.com/in/brunohmalves"}
          icon={"logo-linkedin"}
        />
      </div>
      <Footer>Bruno</Footer>
    </div>
  );
};

export default App;
