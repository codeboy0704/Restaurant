import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Arrow from "./Arrow";

export default function Swipper({ elements }) {
  return (
    <div className="carrousel_wrapper">
      <Arrow />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="card"
        spaceBetween={5}
        slidesPerView={1}
        navigation={{ nextEl: "#swiper_forward", prevEl: "#swiper_back" }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {elements.map((el) => {
          return (
            <SwiperSlide key={el}>
              <div
                className="slide_element"
                style={{
                  backgroundImage: `linear-gradient(rgb(54 32 104 / 50%) 0%, rgb(88 25 70 / 50%) 100%), url(${el})`,
                }}
              >
                <div className="slide_element_text">
                  <h2>Delicias Destacadas</h2>
                  <h4>Recién Salido Del Mar</h4>
                  <p>
                    En Bambinos pensamos en los gustos y necesidades de todos.
                    Para los más pequeños, contamos con un cofre del pirata
                    cuyos tesoros los deleitarán por horas. Los jueves los
                    dedicamos al jazz, apoyando a artistas nacionales como
                    nuestra saxofonista. Celebramos los viernes con una noche de
                    cócteles que inicia a las 7 p.m. hasta la hora del cierre.
                    Los sábados y domingos destacamos varios talentos musicales
                    en vivo. Además, somos pet friendly, ya que nuestras
                    mascotas también son parte de la familia.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
