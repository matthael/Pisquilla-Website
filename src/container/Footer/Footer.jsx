import React from "react";

import { FooterOverlay } from "../../components";
import { images } from "../../constants";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import "./Footer.css";
import { MailChimpForm } from "../../components/Footer/MailChimpForm";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <MailChimpForm />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext"> Contate-nós </h1>
        <p className="p__opensans">
          {" "}
          Quadra 05 lote 29 loja 02, Rasidencial, Av. Santos Dumont, Brasília -
          DF{" "}
        </p>
        <p className="p__opensans"> +55 61 99634-6458</p>
      </div>
      <div className="app__footer-links_logo">
        <h1 className="app__footer-logo-name"> Pisquilla </h1>
        <p className="p__opensans">
          {" "}
          "A melhor maneira de se encontrar é se perder no serviço aos outros.”{" "}
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://api.whatsapp.com/send?phone=5561996346458&text=%F0%9F%91%8B%20Ol%C3%A1%2C%20venho%20de%20https%3A%2F%2Fjantinha-do-pisquilla.ola.click%2Fproducts%20%0AEu%20quero%20fazer%20o%20pr%C3%B3ximo%20pedido%3A%0A"
            target="blank"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.ifood.com.br/delivery/brasilia-df/jantinha-do-pisquilla-residencial-santos-dumont-santa-maria/a9554eef-a2bf-49aa-b2da-8184edb10dc0?utm_medium=share"
            target="blank"
          >
            <SiIfood />
          </a>
          <a href="https://www.instagram.com/pisquilla_janta/" target="blank">
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext"> Horário de Funcionamento</h1>
        <p className="p__opensans"> Segunda - Sabádo </p>
        <p className="p__opensans"> 18hrs às 23hrs</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2023 Pisquilla. Todos os Direitos Reservados
      </p>
    </div>
  </div>
);

export default Footer;
