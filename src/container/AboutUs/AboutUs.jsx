import React from "react";

import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="app_aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant"> Sobre nós </h1>
        <img
          src={images.spoon}
          alt="about_spoon"
          className="spoon__img spoon_left"
        />
        <p className="p__opensans">
          Somos uma empresa familiar que visa o conforto e satisfação de nossos
          clientes contribuindo para que tenham uma ótima experiência
          gastronômica, com pratos de dar água na boca. Em um ambiente
          agradável, adequado para desenvolver relações sociais, onde sua
          família e amigos serão muito bem vindos.
        </p>
        <button type="button" className="custom__button" target="blank">
        <a
          href="https://www.instagram.com/pisquilla_janta/"
          target="blank"
        >
          {" "}
          Saiba Mais{" "}
        </a>
      </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={""} />
      </div>

      <div className="app__aboutus-content__services">
        <h1 className="headtext__cormorant"> Nossos serviços</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Temos pratos muito saborosos, perfeitos para compartilhar momentos
          deliciosos com pessoas especiais. Trabalhamos somente com matérias
          primas de primeiríssima qualidade para proporcionar a melhor
          experiência aos nossos clientes.
        </p>
        <button type="button" className="custom__button" target="blank">
        <a
          href="https://www.ifood.com.br/delivery/brasilia-df/jantinha-do-pisquilla-residencial-santos-dumont-santa-maria/a9554eef-a2bf-49aa-b2da-8184edb10dc0?utm_medium=share"
          target="blank"
        >
          {" "}
          Peça Agora{" "}
        </a>
      </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
