import React, { useState } from "react";
import BAR from "../../assets/menu_bars/menu.svg";
import "./Menu.css";
function Menu() {
  const [menuState, setMenuState] = useState(false);
  return (
    <div className="menu_container">
      <div className="menu_main">
        <div className="logo_container">
          <h1 className="logo">
            Los <span> Bambinos</span>
          </h1>
        </div>
        <button
          className="nav_bar_container"
          onClick={(e) => {
            setMenuState((sta) => !sta);
          }}
        >
          <img className="nav_bar" src={BAR}></img>
        </button>
      </div>
      <nav className={menuState ? "menu expanded" : "menu"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Drinks</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Deserts</a>
          </li>
          <li>
            <a href="#">Contact US</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
