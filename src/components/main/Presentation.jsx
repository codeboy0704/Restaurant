import React from "react";
import Couple from "../../assets/restaurant-table/icons8-restaurant-table-64.svg";
import Platillo1 from "../../assets/food/platillo_1.jpg";
import Platillo2 from "../../assets/food/platillo_2.jpg";
function Presentation() {
  return (
    <div className="main_presentation_container">
      <div className="presentation_text">
        <h3>The best restaurant in Panama</h3>
        <picture className="table_image_container">
          <img src={Couple} alt="table-couple" />
        </picture>
      </div>

      <div className="restaurant_history_text">
        <h1>Los Bambinos</h1>
        <p>
          Bienvenidos a la experiencia Bambinos, donde nuestra mayor
          satisfacción es atenderle como un invitado especial y compartir con
          sus seres más queridos la alta cocina panameña. Como restaurante en
          Amador, Los Bambinos se levanta desde hace más de 20 años como un
          enclave gastronómico y turístico en Isla Flamenco. Su pintoresca
          terraza y acogedores balcones regalan al visitante y comensal
          espectaculares vistas de la Ciudad de Panamá.
        </p>
        <div className="presentation_options">
          <button>Reservaciones</button>
          <button>Ver Menu</button>
        </div>
      </div>
      <div className="presentation_images">
        <picture>
          <img src={Platillo1} alt="platillo 1" />
        </picture>
        <picture>
          <img src={Platillo2} alt="platillo 2" />
        </picture>
      </div>
    </div>
  );
}

export default Presentation;
