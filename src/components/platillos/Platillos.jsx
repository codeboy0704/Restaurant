import React from "react";
import platillos from "./platillosData";
import Logo from "../../assets/our_food.svg";
function Platillos() {
  const platillosList = platillos.map((el) => {
    return (
      <div key={el.id} className="platillos_element">
        <picture>
          <img src={el.image} alt={el.name} />
        </picture>
        <h2>{el.name}</h2>
        <h2>{el.price}</h2>
      </div>
    );
  });
  return (
    <div className="platillos_section">
      {platillosList}
      <div className="platillos_description">
        <h1>Todos aman nuestra comida.</h1>
        <div className="platillos_description_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="platillos_description_text">
          <p>
            Un arco de veraneras recibe a los visitantes junto a nuestro
            bucanero de alta mar para tomarse fotos antes o después de disfrutar
            de una velada, o simplemente al pasar por el lugar. Los turistas
            locales e internacionales se maravillan con nuestra carta,
            amenidades, precios y servicio al cliente. Las reseñas hablan por sí
            solas.
          </p>
          <p>
            Para los tour operadores, contamos con servicios y paquetes
            especiales, en aras a impulsar el turismo nacional y comercio local.
            Nuestro salón de banquetes es ideal para reuniones de trabajo o
            celebraciones y planes de lealtad corporativos con descuentos y
            promociones especiales.
          </p>
        </div>
      </div>
    </div>
  );
}

// rgb(97 73 153 / 90%)

export default Platillos;
