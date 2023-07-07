import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="Find">
    <div className="app__wrapper_info">
      <SubHeading title="Encontre-nos" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        {" "}
        Localização
      </h1>
      <div className="app__wrapper-contet">
        <p className="p__opensans">
          Quadra 05 lote 29 loja 02, Rasidencial, Av. Santos Dumont, Brasília -
          DF
        </p>
        <p
          className="p__cormorant"
          style={{ color: " #DCCA87", margin: "2rem 0" }}
        >
          horário de funcionamento
        </p>
        <p className="p__opensans">Seg - Sab: 18hrs às 23hrs</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        <a
          href="https://www.google.com/maps/dir/-16.0593961,-48.0352966/Residencial+Santos+Dumont+-+Qc+5,+lote+32+-+Santa+Maria+(Residencial+Santos+Dumont,+Bras%C3%ADlia+-+DF,+72593-305/@-16.0168333,-48.0421147,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x935980e43f1f255f:0xf4c29173dedb6bfc!2m2!1d-47.9878005!2d-15.9920386?entry=ttu"
          target="blank"
        >
          {" "}
          Nós Visite{" "}
        </a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
