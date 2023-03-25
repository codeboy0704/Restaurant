import Langostino from "../../assets/platillos/longostino.png";
import Filete from "../../assets/platillos/filete.png";
import Chuleta from "../../assets/platillos/chuleta.png";
import Langosta from "../../assets/platillos/langosta.png";
import Pechuga from "../../assets/platillos/pechuga.png";
import Salmon from "../../assets/platillos/salmon.png";

const data = [
  {
    id: Math.floor(Math.random),
    name: "Langostino al ajillo",
    price: "$21",
    image: Langostino,
  },
  {
    id: Math.floor(Math.random),
    name: "Salmón en Salsa Cítrica",
    price: "$19",
    image: Salmon,
  },
  {
    id: Math.floor(Math.random),
    name: "Pechuga de Pollo en Salsa de Mango",
    price: "$14",
    image: Pechuga,
  },

  {
    id: Math.floor(Math.random),
    name: "Filete de Corvina a la Macho",
    price: "$22",
    image: Filete,
  },
  {
    id: Math.floor(Math.random),
    name: "Langosta clásica en Mantequilla",
    price: "$20",
    image: Langosta,
  },
  {
    id: Math.floor(Math.random),
    name: "Chuleta de Cerdo a la Griega",
    price: "$16",
    image: Chuleta,
  },
];

export default data;
