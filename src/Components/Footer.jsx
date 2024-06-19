import React from "react";
import { useMainState } from "../Context/Context";

const Footer = () => {
  const { state } = useMainState();
  return (
    <footer className={state.theme}>
      <div className="container-wrapper footer-items">
        <div className="footer-logo-wrapper">
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" />
        </div>
        <div className="footer-socialmedia-wrapper">
          <div>
            <img src="/images/ico-facebook.png" alt="facebook" />
          </div>
          <div>
            <img src="/images/ico-instagram.png" alt="instagram" />
          </div>
          <div>
            <img src="/images/ico-whatsapp.png" alt="whatsapp" />
          </div>
          <div>
            <img src="/images/ico-tiktok.png" alt="tiktok" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
