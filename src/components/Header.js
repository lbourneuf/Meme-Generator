import React from "react";
import troll from "../img/troll.png";

function Header() {
  return (
    <header className="header">
      <img className="troll" src={troll} />
      <h1 className="header-title"> Meme Generator </h1>
      <h4 className="header-project"> React Course - Project 3</h4>
    </header>
  );
}

export default Header;
