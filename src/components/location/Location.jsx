function Location() {
  return (
    <div className="location_container">
      <iframe
        className="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.6750498336323!2d-79.52313928644166!3d8.909770893603609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8facaf00c06c5aaf%3A0xe8b9941f3f77f573!2sBucanero&#39;s!5e0!3m2!1ses!2spa!4v1679955257530!5m2!1ses!2spa"
        width="200"
        // height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
