import React from "react";
import Couple from "../../assets/restaurant-table/icons8-restaurant-table-64.svg";

function Presentation() {
  return (
    <div className="main_presentation_container">
      <div className="presentation_text">
        <h3>The best restaurant in Panama</h3>
        <picture className="table_image_container">
          <img src={Couple} alt="table-couple" />
        </picture>
        <h1>Los Bambinos</h1>
      </div>

      <div className="restaurant_history_text">
        <p>
          Bienvenidos a la experiencia Bambinos, donde nuestra mayor
          satisfacción es atenderle como un invitado especial y compartir con
          sus seres más queridos la alta cocina panameña. Como restaurante en
          Amador, Los Bambinos se levanta desde hace más de 20 años como un
          enclave gastronómico y turístico en Isla Flamenco. Su pintoresca
          terraza y acogedores balcones regalan al visitante y comensal
          espectaculares vistas de la Ciudad de Panamá.
        </p>
      </div>
      <div className="presentation_options">
        <button>Reservaciones</button>
        <button>Ver Menu</button>
      </div>
    </div>
  );
}

export default Presentation;
