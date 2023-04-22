import Carrusel from "../carrusel/Swiper.jsx";
import elements from "../carrusel/elements.js";
import Presentation from "../main/Presentation.jsx";
import Platillos from "../platillos/Platillos.jsx";

export default function Home(){
    return(
        <>
        <Presentation />
        <Carrusel elements={elements} />
        <Platillos />
        </>
    )
}