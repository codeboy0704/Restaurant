
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { EffectFade, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Arrow from "../../carrusel/Arrow";
import Images from "../../gallery/carrusel/galleyElements.js"


export default function GalleryCarrusel(){
return(
  <div className="gallery_carrusel">
     <Arrow />
     <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="fade"
        spaceBetween={5}
        slidesPerView={1}
        navigation={{ nextEl: "#swiper_forward", prevEl: "#swiper_back" }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
     {Images.map(el =>{
        return(
            <SwiperSlide key={el}>
             <div
                className="slide_element"
                style={{
                  backgroundImage: `url(${el})`,
                }}
              />


            </SwiperSlide>
        )
     })}

      </Swiper>
  </div>

)
}