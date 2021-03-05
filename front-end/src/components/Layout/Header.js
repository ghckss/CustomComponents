import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h3>header</h3>
      </div>
      <div className="menu">
        <div className="menu__item">menu1</div>
        <div className="menu__item">menu2</div>
        <div className="menu__item">menu3</div>
      </div>
    </header>
  );
};

export default Header;
