import React from "react";
import Breakfast from "../../assets/food/breakfast.jpg";
import Dessert from "../../assets/food/dessert.jpg";
import Meat from "../../assets/food/meat-ga03697fd2_1280.jpg";
import Meat2 from "../../assets/food/food-gf7b22b116_1280.jpg";
import { SwiperSlide } from "swiper/react";
function Slide() {
  const images = [Breakfast, Dessert, Meat, Meat2];
  const map = images.map((el) => {
    return (
      <SwiperSlide key={el}>
        <img src={el} alt="slide image" />
      </SwiperSlide>
    );
  });

  return map;
}

export default Slide;
