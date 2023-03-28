import React from "react";
import Instagram from "../../assets/contact_icons/instagram.svg";
import Facebook from "../../assets/contact_icons/facebook.svg";
import Mail from "../../assets/contact_icons/mail.svg";
import Phone from "../../assets/contact_icons/phone.svg";
function ContactFooter() {
  return (
    <footer className="contact_footer">
      <div className="contact_footer_main">
        <h2>Una nueva experiencia culinaria aguarda por ti.</h2>
        <button>Reserva tu mesa</button>
      </div>
      <div className="info">
        <h2>
          Tambien puedes llamarnos al:<span>+507 6077-8990</span>o escribe a{" "}
          <span>reservas@bambinospanama.com</span> y contáctanos por nuestras
          redes
        </h2>
      </div>
      <div className="location_container">
        <iframe
          className="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.6750498336323!2d-79.52313928644166!3d8.909770893603609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8facaf00c06c5aaf%3A0xe8b9941f3f77f573!2sBucanero&#39;s!5e0!3m2!1ses!2spa!4v1679955257530!5m2!1ses!2spa"
          // width="600"
          // height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact_icons">
        <picture className="contact_icon">
          <img src={Instagram} alt="Instagram Logo" />
        </picture>
        <picture className="contact_icon">
          <img src={Facebook} alt="Facebook Logo" />
        </picture>
        <picture className="contact_icon">
          <img src={Mail} alt="Instagram Logo" />
        </picture>
      </div>
    </footer>
  );
}

// 97, 73, 153;

export default ContactFooter;
