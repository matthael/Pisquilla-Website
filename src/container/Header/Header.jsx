import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Encontre Novos Sabores" />
      <h1 className="app__header-h1">
        Sabores incríveis para encantar seu paladar!
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Venha experimentar nossos pratos incríveis, uma experiência gastronômica
        com um ambiente familiar e agradável
      </p>
      <button type="button" className="custom__button">
        <a href="#menu"> Explorar Menu </a>
      </button>
      <button type="button" className="custom__button Right" target="blank">
        <a
          href="https://www.ifood.com.br/delivery/brasilia-df/jantinha-do-pisquilla-residencial-santos-dumont-santa-maria/a9554eef-a2bf-49aa-b2da-8184edb10dc0?utm_medium=share"
          target="blank"
        >
          {" "}
          Peça Agora{" "}
        </a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
