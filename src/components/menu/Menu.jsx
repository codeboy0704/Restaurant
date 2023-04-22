import React, { useState } from "react";
import BAR from "../../assets/menu_bars/menu.svg";
import "./Menu.css";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/dessert">Deserts</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
