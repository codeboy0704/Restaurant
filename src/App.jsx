import { useState } from "react";
import "./App.css";
import Presentation from "./components/main/Presentation";
import Menu from "./components/menu/Menu";
import Carrusel from "../src/components/carrusel/Swiper";
import elements from "./components/carrusel/elements";
import Platillos from "./components/platillos/Platillos";
import ContactFooter from "./components/contact/ContactFooter";
import { BrowserRouter, Route, Router, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";

const router = createBrowserRouter([

  {
   path: "/",
   element: (
    <>
      <Menu />
      <Home />
      <ContactFooter />
    </>
   ),
 },
 {
  path: "/gallery",
  element: (
    <>
      <Menu />
      Gallery
      <ContactFooter />

    </>
  )

 }
 
]
)
function App() {
  return (
      <div className="App">
      <RouterProvider router={router} />
      </div>
   
  );
}

export default App;
