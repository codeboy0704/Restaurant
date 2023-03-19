import { useState } from "react";
import "./App.css";
import Presentation from "./components/main/Presentation";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Presentation />
    </div>
  );
}

export default App;
