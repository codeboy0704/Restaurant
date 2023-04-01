import React from "react";
import Instagram from "../../assets/contact_icons/instagram.svg";
import Facebook from "../../assets/contact_icons/facebook.svg";
import Mail from "../../assets/contact_icons/mail.svg";
import Phone from "../../assets/contact_icons/phone.svg";
import Location from "../location/Location";
import { Link } from "react-router-dom";
function ContactFooter() {
  return (
    <footer className="contact_footer">
      <div className="contact_footer_main">
        <h2>Una nueva experiencia culinaria aguarda por ti.</h2>
        <button>Reserva tu mesa</button>
      </div>

      <Location />
      <div className="contact_icons">
        <Link to="https://instagram.com" className="contact_icon">
          <img src={Instagram} alt="Instagram Logo" />
        </Link>
        <Link to="https://facebook.com" className="contact_icon">
          <img src={Facebook} alt="Facebook Logo" />
        </Link>
        <Link className="contact_icon">
          <img src={Mail} alt="Instagram Logo" />
        </Link>
        <Link className="contact_icon">
          <img src={Phone} alt="Phone Logo" />
        </Link>
      </div>
    </footer>
  );
}

// 97, 73, 153;

export default ContactFooter;
