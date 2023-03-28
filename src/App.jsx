import { useState } from "react";
import "./App.css";
import Presentation from "./components/main/Presentation";
import Menu from "./components/menu/Menu";
import Carrusel from "../src/components/carrusel/Swiper";
import elements from "./components/carrusel/elements";
import Platillos from "./components/platillos/Platillos";
import ContactFooter from "./components/contact/ContactFooter";

function App() {
  return (
    <div className="App">
      <Menu />
      <Presentation />
      <Carrusel elements={elements} />
      <Platillos />
      <ContactFooter />
    </div>
  );
}

export default App;
