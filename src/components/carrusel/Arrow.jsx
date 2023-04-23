import React from 'react'
import RightArrow from "../../assets/arrows/right.svg";
import LeftArrow from "../../assets/arrows/left.svg";
function Arrow() {
  return (
    <>
     <button id="swiper_back" className="left_arrow arrow">
        <img src={LeftArrow} alt="left arrow" />
      </button>
      <button id="swiper_forward" className="right_arrow arrow">
        <img src={RightArrow} alt="right arrow" />
      </button>
    </>
  )
}

export default Arrow