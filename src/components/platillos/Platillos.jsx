import React from "react";
import platillos from "./platillosData";
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
  return <div className="platillos_section">{platillosList}</div>;
}

export default Platillos;
