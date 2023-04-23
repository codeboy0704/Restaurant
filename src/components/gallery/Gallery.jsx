import React from 'react'
import Divider from "../../assets/gallery/divider-free-img.png"
import GalleryCarrusel from './carrusel/GallerySwipper'
function Gallery() {
  return (
    <div className='gallery_container'>
        <div className='gallery_main'>
           <div>
            <h4>Vive la experiencia con nosotros</h4>
           </div>
           <div>
            <h2>Galeria De Fotos</h2>
           </div>
        <div className='triangle'></div>
        </div>
        <div className="gallery_carrusel">
        <div className='divider_container'>
          <img src={Divider} alt="divider_img"/>
        </div>
         <GalleryCarrusel />
        </div>
    </div>
  )
}

export default Gallery